import React, {Component} from 'react';
import './App.scss';
import mountains from './data/mountains.js'
import MountainsByPass from './Mountains-By-Pass.js'
import ikon from './ikon.png'
import epic from './epic.png'
import Mountain from './Mountain.js'
import { NONAME } from 'dns';

class App extends Component {
  constructor() {
    super()
    this.epic = mountains.epic
    this.ikon = mountains.ikon
  }
  state = {
    currMtn: {},
    customerLocation: "Denver",
    distance: ''
  }
  setCurrMtn = currMtn => {
    this.setState({currMtn: currMtn});
  }
  async componentDidMount() {
    try {
      const res = await fetch("https://api.mapbox.com/optimized-trips/v1/mapbox/driving/104.9903,39.7392;106.3742,39.6403?access_token=pk.eyJ1IjoiZW1hcmtvd2l0ejEiLCJhIjoiY2p4ZGk2MnJ2MDBjcTN6b2UxajUyYjRhZSJ9.XIROv2F-QVzLRKbMbe3b_A");
      const distance = await res.json();
      console.log(distance)
      this.setState({
        distance: distance
      })
      
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <main className="main">
        <section className='splash-photo'>
          <h1 className='title'>SKI PASS WARS</h1>
          <h3 className='tagline'>FIND YOUR NEXT SEASON PASS</h3>
        </section>
        <section className="pass--comparison--section">
          <MountainsByPass mountains={this.ikon} title={ikon} adultCost='$1,049' childCost='$749' setCurrMtn={this.setCurrMtn}/>
          <MountainsByPass mountains={this.epic} title={epic} adultCost='$939' childCost='$489' setCurrMtn={this.setCurrMtn}/>
          <Mountain mtn={this.state.currMtn} setCurrMtn={this.setCurrMtn}/>
        </section>
      </main>
    )
  }
}



export default App;
