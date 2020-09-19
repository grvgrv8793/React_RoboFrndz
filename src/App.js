import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield:''
    }
  }

  onSearchChange = (event) => {      //We are creating a new function for searching and we have to use arrow function here or elseit will not point to app component object because this function is created by us not a default function by react.
    this.setState({searchfield: event.target.value})  //Here we are setting state for serachfiled which was empty whatever we will type it will store as an event in that.
    console.log(event.target.value);
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => { //filter method will create a temporary array for filtering
      return robots.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
      //here we are returing only those robots which is having same name in searchfield
    })
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriendz</h1>
        <SearchBox searchChange={this.onSearchChange}/> // We are passing onSearchChange function to SearchBox component so that this can be used as props in searchBox file
        <CardList robots = {filteredRobots}/>
      </div>
    );
  }
}
export default App;
