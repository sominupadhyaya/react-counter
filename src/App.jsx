import React, { Component } from "react"
// import Componenet from './Component'

class App extends Component {    
    constructor(){
        super()
        this.state = {counter : 0}
        this.add = () =>{
            this.setState({counter : this.state.counter+1})
        }
    }
    render(){
        return(
        <div>
            <h2>{this.state.counter}</h2>
            <button onClick = {this.add}>Click Me!
            </button>
        </div>
    )
  }
}

export default App
