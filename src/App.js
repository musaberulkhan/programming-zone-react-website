import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Logo from './Images/logo.png';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import CourseDetails from './Components/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          {/* -------------------    Navigation     ------------------ */}
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* -------------------    Website Title and Logo     ------------------ */}
              <img className="brand-logo" src={Logo} alt="" />
              <Link className="navbar-brand" to="/">Programming Zone</Link>
              {/* -------------------    Mobile Menu     ------------------ */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon d-flex align-items-center"><i className="fas fa-bars"></i></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {/* -------------------    Nav Links     ------------------ */}
                <div className="navbar-nav">
                  <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
                  <Link className="nav-link" to="/courses"><i className="fas fa-list"></i> Courses</Link>
                  <Link className="nav-link" to="/about"><i className="fas fa-info-circle"></i> About</Link>
                  <Link className="nav-link" to="/contact"><i className="fas fa-envelope-open-text"></i> Contact</Link>
                  <Link className="nav-link" to="/login"><i className="fas fa-user"></i> Login</Link>
                </div>
              </div>
            </div>
          </nav>

          {/*-----------    All Routes and paths according to navigation  -----------*/}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/coursedetails/:courseId">
              <CourseDetails></CourseDetails>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
