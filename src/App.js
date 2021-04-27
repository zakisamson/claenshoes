import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
