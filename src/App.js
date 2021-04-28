import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CP } from './components/CP';
import { Delivery } from './components/Delivery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <CP />
      <Delivery />
    </div>
  );
}

export default App;
