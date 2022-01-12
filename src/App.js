import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import NavBar from './NavBar/NavBar';


const Home = ()=><h1>Welcome to Homepage!</h1>
const About = ()=><h1>About</h1>
const Services = ()=><h1>Services</h1>
const Contact = ()=><h1>Contact</h1>


function App() {
    return (
        <Router>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
       </Router>
    );
} 

export default App;