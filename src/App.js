import './App.css';
import Landing from './screens/Landing';
import Searched from './screens/Searched'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <div class="App">
        <Routes>  //allows us to store the different urls in the application
          //the route renders some UI - or screen - when its path matches the current url
          <Route path='/' element={<Landing/>}/> //landing screen
          <Route path='/recipe/:term' element={<Searched/>}/> //search screen - colon term is placeholder and any word can go there
          </Routes>
      </div>
    </Router>
  );
}

export default App;
