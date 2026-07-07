import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UploadDrafts from './components/UploadDrafts';
import VerificationDashboard from './components/VerificationDashboard';
import VerificationReport from './components/VerificationReport';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reportShipment, setReportShipment] = useState(null);

  const handleViewReport = (shipment) => {
    setReportShipment(shipment);
    setActiveTab('report');
  };

  const handleBackToDashboard = () => {
    setReportShipment(null);
    setActiveTab('verification');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h1>Dashboard</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Welcome to the METALLORA Digital Verification System.</p>
            <div className="card" style={{ marginTop: '2rem' }}>
              <h2>System Status Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>12</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Active Shipments</div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>3</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Pending Verification</div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--status-error)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-error)' }}>1</div>
                  <div style={{ color: 'var(--status-error)', fontSize: '0.875rem' }}>Discrepancy Found</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'upload':
        return <UploadDrafts />;
      case 'verification':
        return <VerificationDashboard onViewReport={handleViewReport} />;
      case 'report':
        return <VerificationReport shipment={reportShipment} onBack={handleBackToDashboard} />;
      case 'history':
        return (
          <div>
            <h1>History</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Past verifications and audit logs.</p>
            <div className="card" style={{ marginTop: '2rem', opacity: 0.5 }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>No recent history</div>
            </div>
          </div>
        );
      default:
        return <div>Select a module</div>;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab === 'report' ? 'verification' : activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
