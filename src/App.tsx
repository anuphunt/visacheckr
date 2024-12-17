import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { VisaChecker } from './components/visa/VisaChecker';
import { PassportRanking } from './components/ranking/PassportRanking';

function App() {
  const [showRanking, setShowRanking] = useState(false);

  if (showRanking) {
    return <PassportRanking onBack={() => setShowRanking(false)} />;
  }

  return (
    <AppLayout>
      <VisaChecker onShowRanking={() => setShowRanking(true)} />
    </AppLayout>
  );
}

export default App;