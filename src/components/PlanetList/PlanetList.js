import React, { Component } from 'react';
import './PlanetList.css';

class PlanetList extends Component {
    render() {
        return (
        <div>
            
            <div className="keyIdentifier">
                Planets:
            </div>    
            <section>
                <ul>
                    {this.props.planetList.map(planet => <li key={planet.name}>{planet.name}</li>)}
                </ul> 
            </section>
            
        </div>
        );
    }
}
  
export default PlanetList;