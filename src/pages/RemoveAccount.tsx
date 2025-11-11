import React, { useState } from 'react';
import { RemoveAccountForm, FormErrors } from '../types';
import WarningModal from '../components/WarningModal';

const RemoveAccount: React.FC = () => {
  const [formData, setFormData] = useState<RemoveAccountForm>({
    email: '',
    confirmEmail: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Confirm email validation
    if (!formData.confirmEmail) {
      newErrors.confirmEmail = 'Please confirm your email';
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Emails do not match';
    }

    // Terms acceptance validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowWarningModal(true);
    }
  };

  const handleConfirmRemoval = async () => {
    setIsSubmitting(true);
    setShowWarningModal(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error removing account:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Delete Your Account
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're sorry to see you go. Please confirm your email address and understand the consequences of account deletion.
            </p>
          </div>

          {/* Warning Card */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Important Warning
                </h3>
                <div className="text-yellow-700 space-y-2">
                  <p>⚠️ <strong>This action is permanent and cannot be undone.</strong></p>
                  <p>🗑️ <strong>All your data will be permanently deleted:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your account information</li>
                    <li>All test results and reports</li>
                    <li>App testing history</li>
                    <li>Profile data and preferences</li>
                    <li>Connected devices and sessions</li>
                  </ul>
                  <p>⏰ <strong>Grace period:</strong> Your account will be deleted after 7 days if not accessed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Confirm Email Field */}
            <div>
              <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Email Address *
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.confirmEmail ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm your email address"
              />
              {errors.confirmEmail && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmEmail}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                  I understand that this action will permanently delete my account and all associated data. 
                  I have read and accept the consequences of account deletion. *
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Delete My Account'
                )}
              </button>
            </div>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.history.back()}
              className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              ← Back to previous page
            </button>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      <WarningModal
        isOpen={showWarningModal}
        onClose={() => setShowWarningModal(false)}
        onConfirm={handleConfirmRemoval}
        title="Confirm Account Deletion"
        message={`Are you absolutely sure you want to delete your account?
        
This action will permanently remove all your data including:
• Account information
• Test results and reports  
• App testing history
• Profile data and preferences

Your account will be deactivated for 7 days. You can still log in during this period to cancel the deletion. After 7 days, all data will be permanently lost.`
        }
        confirmText="Yes, Delete My Account"
        cancelText="Cancel"
        type="danger"
      />

      {/* Success Modal */}
      <WarningModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onConfirm={() => setShowSuccessModal(false)}
        title="Account Deletion Initiated"
        message="We're sorry to see you go. Your account will be deleted from the system in 7 days if you don't access the app during this period."
        confirmText="Got it"
        cancelText=""
        type="info"
      />
    </div>
  );
};

export default RemoveAccount;
