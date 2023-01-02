
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
