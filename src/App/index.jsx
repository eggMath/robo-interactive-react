import React, { Component } from 'react'
import {robots} from '../App/API';
import SearchBox from '../App/searchBox'
import CardList from '../App/CardList';



export class App extends Component {

    state = {
        robots:robots,
        searchField:''
    }

    onSearchChange=(event)=>{
    
        this.setState({
            searchField:event.target.value
        })
    }
 
  render() {

    const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return (
 
      <div className='tc'>
          <h1 style={{tc:'center', color:'white'}}>Search Robots</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filterRobots}/>
        
      </div>
    )
  }
}



export default App
