import React from 'react';
import './App.css';

//Components 
import Header from './components/header/index';
import Home from './components/home/index';
import Sobre from './components/sobre/index';
import Servicos from './components/servicos/index';
import Equipe from './components/equipe/index';
import Contato from './components/contato/index';
import Informacoes from './components/informacoes/index';
import Footer from './components/footer/index';

function App() {
  return (
    <section>
      <Header />
      <Home />
      <Sobre />
      <Servicos />
      <Equipe />
      <Contato />
      <Informacoes />
      <Footer />
    </section>
  );
}

export default App;
