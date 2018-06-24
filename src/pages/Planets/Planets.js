import React from 'react';
import { Route, Link } from "react-router-dom";
import PlanetList from '../../components/PlanetList';

const Planets = ({match}) => (
    <div>
        <PlanetList planetList = {this.state.planetList} />
        <h2>Planets</h2>
        <Route path={`${match.url}/`} component={PlanetList} />  
    </div>    
);

export default Planets;