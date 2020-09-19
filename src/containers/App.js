import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  componentDidMount(){ // Here we didnt use arrow function because this method is defualt method associated with component
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}));
  }



  onSearchChange = (event) => {      //We are creating a new function for searching and we have to use arrow function here or elseit will not point to app component object because this function is created by us not a default function by react.
    this.setState({searchfield: event.target.value})  //Here we are setting state for serachfiled which was empty whatever we will type it will store as an event in that.
    console.log(event.target.value);
  }

  render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot => { //filter method will create a temporary array for filtering
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
      //here we are returing only those robots which is having same name in searchfield
    })

    if(!robots.length){
      return <h1> Loading Bots</h1>
    }
    else{return(
      <div className='tc'>
        <h1 className='f1'>RoboFriendz</h1>
        <SearchBox searchChange={this.onSearchChange}/> // We are passing onSearchChange function to SearchBox component so that this can be used as props in searchBox file
        <Scroll>
          <CardList robots = {filteredRobots}/>
        </Scroll>
      </div>
    );
  }
  }
}
export default App;
