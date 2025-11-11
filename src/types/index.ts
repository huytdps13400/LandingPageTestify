// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialProps extends Testimonial {}

export interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotation?: number;
}

// Page Meta Types
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}

// Animation Types
export interface GSAPAnimationProps {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  anticipatePin?: number;
}

// Content Types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// Feature Data Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

// Hero Section Types
export interface HeroStats {
  label: string;
  value: string;
  suffix?: string;
}

// CTA Section Types
export interface CTASection {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

// Account Removal Form Types
export interface RemoveAccountForm {
  email: string;
  confirmEmail: string;
  acceptTerms: boolean;
}

export interface FormErrors {
  email?: string;
  confirmEmail?: string;
  acceptTerms?: string;
}

// Modal Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
}
