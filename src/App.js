import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'


const famille = {
  membre1: {
    nom: 'Chloé',
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
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille2 = {... this.state.famille}
    famille.membre1.age += num 
    this.setState({ famille2 })
  }
  handleChange = (event, id) => {
    const famille = {... this.state.famille}
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  cacherNom = id => {
    const famille = {... this.state.famille}
    famille[id].nom = 'X'
    this.setState({ famille })
  }
  
  
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {  
    const {titre} = this.props
    const { famille, isShow } = this.state

    let description = null

    if (isShow) {
      description = <strong>Je suis un chat</strong>
    } 

    const liste = Object.keys(famille)
    .map(membre =>(
      <Membre
        key={membre}
        cacherNom={() => this.cacherNom(membre)}
        handleChange={event => this.handleChange(event, membre)}
        nom={famille[membre].nom}
        age={famille[membre].age}/>
    ))

    return (
    
      <div className = 'App'>
    <h1>{this.props.pute}</h1> 
    <input value={famille.membre1.nom} onChange={this.handleChange} type="text"/>
        {liste }
        <Membre
         nom={famille.membre4.nom}
         age={famille.membre4.age}>
           {
             description
            } <br/>
            <div className="mt-5">

              <button onClick={this.handleShowDescription}>MONTRER</button>
            </div>
            <br/>
         </Membre>
         

         <Button action={() => this.handleClick(2)}/>
            
        

     
      </div>
      
    
    );
  }
}

export default App;
