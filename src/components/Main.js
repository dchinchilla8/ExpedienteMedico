import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-xl">Contenido Principal</h2>
        {/* Aquí puedes añadir más componentes o contenido */}
      </main>
      <Footer />
    </div>
  );
}

export default MainComponent;
