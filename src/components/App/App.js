import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from '../../pages/Home/Home';
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList';
// import Planets from '../../pages/Planets/Planets';
// import People from '../../pages/People/People';

class App extends Component {
  constructor(props) {
    // React components have props, pass them to the parent (component) class – if you don't, things won't work!
    super(props);

    // setting state with an = is something you only want to do in the constructor
    this.state = {
        planetList: [],
        people: []
    };
  }  
  
  // similar to jQuery's onReady
  // called by React when the component is loaded
  componentDidMount() {
    console.log('App component mounted');
    const url = 'https://swapi.co/api/planets/?format=json'
    this.getPlanets(url);
  }
  
  async getPlanets(url) {
    let nextUrl = url;
    while (nextUrl != null) {
      await axios.get(nextUrl)
      .then((response) => {
        this.setState({planetList: 
        [...this.state.planetList, ...response.data.results]
        });
        nextUrl = response.data.next;
      }).catch( (error) => {
        console.log(error);
        nextUrl = null;
      }) 
    }
  }
  
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <ul>
              <li><Link className="link" to='/'>Home</Link></li>
              <li><Link className="link" to='/planets'>Planets</Link></li>
              {/* <li><Link className="link" to='/people'>People</Link></li> */}
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/planets' component={PlanetList} />
          {/* <Route path='/people' component={People} />   */}
          {/* <PlanetList planetList = {this.state.planetList} />         */}
        </div>
      </Router>  
    );
  }
} 

export default App;