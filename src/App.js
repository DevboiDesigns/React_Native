import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots.js'




class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: robots,
            searchfield: ''
        }
    }

    // your own made up Functions need  " = () => "
    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })              // .includes()  .filter()   .toLowerCase()

        return (
            <div className='tc'>

                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/> 
    
            </div>
           
        )
    }
}

export default App