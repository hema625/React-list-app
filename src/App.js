import React, { Component } from 'react';
import './App.css';
import User from './components/user'
import Uid from 'react-html-id'

class App extends Component {

  constructor() {
    super();
    Uid.enableUniqueIds(this);
    this.state = {
      users : [ 
               {id : this.nextUniqueId(),name : "Hema",age : 32},
               {id : this.nextUniqueId(),name : "Uday",age : 32},
               {id : this.nextUniqueId(),name : "Boy",age : 1},
               {id : this.nextUniqueId(),name : "Girl",age : 1}
      ]   
    }
    console.log(this.state);
  }
  

  del = (index,e) => {
     const ui= Object.assign([],this.state.users);
    //  const ui = [...this.state.users];
     ui.splice(index,1);
     this.setState({
       users : ui
     })
  }

  chgUser = (id,e) => {
      const index = this.state.users.findIndex((num)=> {
           return num.id === id
      });
      const us = Object.assign([],this.state.users[index]);
      // const us = [...this.state.users];
      us.name = e.target.value;
      const uii= Object.assign([],this.state.users);
      uii[index] = us;
      this.setState({
        users : uii
      })
  }

  
  render() {
    return (
      <div className="App">
        <ul>
           {
             this.state.users.map((num,index) => {
                 return <User age = {num.age} key = {num.id} chgevt = {this.chgUser.bind(this,num.id)}
                  delete = {this.del.bind(this,index)}>{num.name}</User>
             })
            
           }
        </ul>
      </div>
    );
  }
}

export default App;
