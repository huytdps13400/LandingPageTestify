# 📱 Community Tester App – Feature Summary

## 1. Technical Overview

* **Frontend:** React Native + Expo
* **Backend:** Supabase (Free Plan)
* **Notifications:** Firebase Cloud Messaging (FCM)

---

## 2. Core Features (MVP)

### 2.1 Authentication & User Profile

* Sign in with Google (via Supabase Auth).
* User Profile: display name, email, role (Developer / Tester).
* Save FCM token for receiving notifications.

### 2.2 Test Room Management

* **Create Test Room (Developer):**

  * **Auto Mode:**
    * Automatically fetch package name and track from Google Play Console via OAuth
    * User selects app and track (closed/internal/open) from available list
    * Automatically add testers to Google Play Console when they join
  * **Manual Mode:**
    * User manually inputs: package name, track, version
    * Provides CSV export functionality for manual tester addition to Google Play Console
  * Basic info: app name, Google Play opt-in link, required tester count, start & end dates (≥14 days).
  * Default status: `open`.
* **Test Room List:**

  * Show all `open` rooms for testers to join.
  * Filter by: status (open/completed), remaining tester slots, or days left.
  * Display creation method (Auto/Manual) and track.
* **Test Room Details:**

  * Display all testers, opt-in status, continuous check-in days.
  * Progress bar: testers joined vs target.
  * Warnings: missing testers, broken streaks, near expiration.
  * CSV export button: download tester list as CSV file.

### 2.3 Tester Participation

* Join a test room using Google email.
* **Global Check-in System:** Check-in once daily from home screen.
* Track progress: global streak days, remaining days to completion.

### 2.4 Global Daily Check-in

* Tester presses **"I still have the app installed today"** once per day from home screen.
* System saves `global_checkins.local_date` (user's device timezone) ensuring one check-in per day.
* Missing a day resets the global streak.
* **Global streak:** Tracks across all rooms, not per-room.

### 2.5 “Nudge” Button (Check-in Reminder)

* Available only to room owners (Developers/Moderators).
* Sends **Push FCM** notifications to testers who haven’t checked in today.
* Cooldown: one nudge per room every 8 hours.
* Displays result: `Reminded X users – Next available in 8h`.
* Deep link in notification opens directly to Check-in screen.

---

## 3. Edge Functions (Serverless)

### 3.1 `nudge_room(room_id)`

* Validate ownership permissions.
* Rate-limit (8h per room).
* Query testers who haven’t checked in today.
* Send FCM push notifications.
* Log each trigger in the `nudges` table.

### 3.2 `get_room_progress(room_id)`

* Return JSON summary of test room progress:

  * Total testers, opted-in count, today's check-ins, pending testers.
  * Streak days for each tester (`streak_days`).

### 3.3 `add_testers_to_google_play(roomId, packageName, track, versionName, testerEmails)`

* Validate room ownership permissions.
* Retrieve OAuth token from database.
* Call Google Play Developer API to add testers to track.
* Update status in database.
* Return result: number of testers successfully added.

### 3.4 `export_room_csv(roomId, format)`

* Validate room access permissions.
* Retrieve tester list from database.
* Generate CSV file in specified format (email_only or full_details).
* Upload file to Supabase Storage.
* Return download URL.

### 3.5 `get_google_play_apps(userId)`

* Authenticate user and retrieve OAuth token.
* Call Google Play Developer API to get apps list.
* Return apps list with packageName and available tracks.

---

## 4. Notifications & Automation

* **Push FCM when:**

  * Developer presses **Nudge**.
  * **Auto-reminders** twice daily (09:00 & 20:00 local time) via scheduled Edge Function.
  * **Strong reminders** 48h before room end date.
* FCM payload includes `deeplink` → directly opens the Check-in screen.

---

## 5. Security & Data Management

* **Supabase RLS (Row Level Security):**

  * Users can only view/edit their own data.
  * Developers can only view/edit their own rooms.
* **No service_role key** inside the app.
* **Invalid FCM tokens** are automatically removed upon error responses.

---

## 6. User Interface / UX

* **Home Screen:** list of available test rooms (filterable).
* **Create Test Room:**
  * **Method Selection:** Toggle between Auto and Manual modes.
  * **Auto Mode:**
    * Dropdown to select app from Google Play Console.
    * Dropdown to select track (closed/internal/open).
    * Display version name automatically.
  * **Manual Mode:**
    * Input package name, track, version name.
    * "Export CSV Template" button to download sample file.
* **Room Details:**

  * App info, tester list, Check-in button, Nudge button.
  * "Export CSV" button to download tester list.
  * Display creation method (Auto/Manual) and track.
* **Progress bar** + remaining day countdown.
* **User Profile:** participation history, highest streak, role.
* **Push & In-app notifications.**

---

## 7. Future Enhancements

* Reputation / badge system for testers.
* Tester leaderboard.
* Smart matching suggestions (testers ↔ rooms).
* Spam/user report moderation.
* Admin web dashboard (post-MVP).

---

## 8. New Features Added

✅ **Auto/Manual Test Room Creation:**

* Auto mode: Integrate with Google Play Console API for seamless tester management
* Manual mode: Full control with CSV export/import capabilities

✅ **CSV Export/Import:**

* Export tester lists as CSV files
* Import tester emails from CSV templates
* Support for both email-only and full-details formats

---

## 9. Summary

This app builds a community-driven platform that helps developers find reliable testers to meet Google Play’s “≥12 testers for 14 days” release requirement.

MVP goals:

* Simple, automatic daily reminders.
* Zero backend cost (Supabase Free + FCM Free).
* Transparent and serverless architecture.
