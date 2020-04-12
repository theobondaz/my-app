import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'


const famille = {
  membre1: {
    nom: 'Anthony',
    age: 27
  },
  membre2: {
    nom: 'Theo',
    age: 22
  },
  membre3: {
    nom: 'Shishi',
    age: 21
  },
  membre4: {
    nom: 'Bebi',
    age: 2
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = (num) => {
    const famille2 = {... this.state.famille}
    famille.membre1.age += num 
    this.setState({ famille2 })
  }
  handleChange = event => {
    const famille2 = {... this.state.famille}
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille2 })
  }
  

  render () {  
    const {titre} = this.props
    const { famille } = this.state
    return (
    
      <div className = 'App'>
    <h1>{this.props.pute}</h1> 
    <input value={famille.membre1.nom} onChange={this.handleChange} type="text"/>
        <Membre
         nom={famille.membre1.nom}
         age={famille.membre1.age}/>

        <Membre
         nom={famille.membre2.nom}
         age={famille.membre2.age}/>

        <Membre
         nom={famille.membre3.nom}
         age={famille.membre3.age}/>

        <Membre
         nom={famille.membre4.nom}
         age={famille.membre4.age}/>

         <Button action={() => this.handleClick(2)}></Button>

         
        
        

     
      </div>
      
    
    );
  }
}

export default App;
