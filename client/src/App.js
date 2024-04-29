import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/About';
import Techstack from './components/Techstack';

function App() {
  return (
    <>
      <Layout/>
       <div className='container'>
      <About/>
      <Techstack/>
      </div>
    </>
  );
}

export default App;
