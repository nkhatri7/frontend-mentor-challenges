import './App.scss';
import Boost from './components/boost/Boost';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Features />
        <Boost />
      </main>
      <Footer />
    </div>
  );
}

export default App;
