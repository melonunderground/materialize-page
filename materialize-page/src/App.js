import React, {
  Component
} from 'react';
// import {Navbar,NavItem,Card,CardTitle} from 'react-materialize';
// import image from './rodent.jpg';
import './App.css';

const token = 'BTYTMTTPNHCE4KZVMUXI'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],

    }
  }
  
  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/events/search/?token=" + token + "&q=austin_music")
      .then(results => results.json())
      .then(res => {

        const newEvents = res.events.map((event) => event)
        this.setState({
          events: newEvents,
        })

        })

  }

  render() {
    // if (this.state.name !== null)
    // {
    return (

      <div>
        <p>hallo</p>
        <p> {this.state.description} </p>
      </div>

    )
  }
}

export default App;
