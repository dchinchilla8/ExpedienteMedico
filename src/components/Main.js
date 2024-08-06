import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Dashboards from './Dashboards';
import './Main.css';

function MainComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Dashboards />
      </main>
      <Footer />
    </div>
  );
}

export default MainComponent;
