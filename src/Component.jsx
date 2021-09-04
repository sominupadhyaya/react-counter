import React , {Component} from 'react'

class Componenet extends Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return <div>I am {this.props.name} and my age is {this.props.age}</div>
}
}

// export default Componenet