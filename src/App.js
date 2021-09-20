import './App.css';
import LatestCourse from './Component/LatestCourse/LatestCourse';
import Navbar from './Component/Navbar/Navbar';
import TopSection from './Component/TopSection/TopSection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopSection></TopSection>
      <LatestCourse></LatestCourse>
    </div>
  );
}

export default App;
