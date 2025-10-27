import { useState } from 'react';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { SupportPage } from './components/SupportPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'privacy' | 'support'>('privacy');

  return (
    <>
      {currentRoute === 'privacy' && <PrivacyPolicyPage onNavigate={setCurrentRoute} />}
      {currentRoute === 'support' && <SupportPage onNavigate={setCurrentRoute} />}
    </>
  );
}
