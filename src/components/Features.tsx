import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Feature } from '../types'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const features: Feature[] = [
    {
      id: 'auto-manual',
      title: 'Auto/Manual Test Room Creation',
      description: 'Choose between automatic Google Play Console integration or manual setup with CSV export capabilities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      benefits: [
        'Google Play Console OAuth integration',
        'Manual mode with full control',
        'CSV export for tester management',
        'Track selection (closed/internal/open)'
      ]
    },
    {
      id: 'global-checkin',
      title: 'Global Daily Check-in System',
      description: 'One simple check-in per day from the home screen, with global streak tracking across all test rooms.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        'Daily check-in from home screen',
        'Global streak across all rooms',
        'Automatic timezone handling',
        'Missed day streak reset'
      ]
    },
    {
      id: 'nudge-system',
      title: 'Smart Nudge & Notification System',
      description: 'Automated reminders and manual nudge capabilities to keep testers engaged throughout the testing period.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      benefits: [
        '8-hour cooldown for nudges',
        'FCM push notifications',
        'Automatic daily reminders',
        'Strong reminders before expiry'
      ]
    },
    {
      id: 'progress-tracking',
      title: 'Real-time Progress Tracking',
      description: 'Comprehensive dashboard showing tester progress, streak days, opt-in status, and room completion metrics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      benefits: [
        'Progress bars and completion tracking',
        'Streak day calculations',
        'Opt-in status monitoring',
        'CSV export functionality'
      ]
    },
    {
      id: 'google-play-integration',
      title: 'Google Play Console Integration',
      description: 'Seamless integration with Google Play Console for automatic tester management and track configuration.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      benefits: [
        'OAuth authentication',
        'Automatic package name detection',
        'Track management',
        'Tester list synchronization'
      ]
    },
    {
      id: 'community-platform',
      title: 'Community-Driven Platform',
      description: 'Build a reliable network of testers and developers, creating a sustainable testing ecosystem.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefits: [
        'Developer-tester matching',
        'Reputation system (future)',
        'Community leaderboards',
        'Smart matching suggestions'
      ]
    }
  ]

  useEffect(() => {
    if (
      sectionRef.current &&
      titleRef.current &&
      descriptionRef.current &&
      featuresRef.current &&
      !document.body.classList.contains('animations-disabled')
    ) {
      const title = titleRef.current
      const description = descriptionRef.current
      const featureCards = featuresRef.current.querySelectorAll('.feature-card')

      // Title animation
      gsap.fromTo(title, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Description animation
      gsap.fromTo(description,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: description,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Feature cards stagger animation
      gsap.fromTo(featureCards,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful Features for 
            <span className="gradient-text"> App Testing</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to manage testers, track progress, and meet Google Play 
            testing requirements with our comprehensive community-driven platform.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    className="flex items-start text-sm text-gray-500"
                  >
                    <svg 
                      className="w-4 h-4 text-primary-500 mt-0.5 mr-3 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
