
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
     <Navbar title="TextUtils" aboutText="About"/>
  {/* <Navbar/> */}
  {/* <div className="container my-3">
  <TextForm heading="Enter text to Analyze"/>
  </div> */}
  <About />
    </>
  );
}

export default App;
