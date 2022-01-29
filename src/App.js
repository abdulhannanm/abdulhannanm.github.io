import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import learnMore from "./components/pages/learnMore/learnMore"
import signIn from "./components/pages/signIn/signIn"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/learnmore' component={learnMore}/>
          <Route path='/sign-up' component={signIn}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
  