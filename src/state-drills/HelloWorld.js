import React from 'react';

const milliseconds = 1000
setInterval(
  function callback() {
    // update the state.date in here
  },
  milliseconds
)

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = { who: " World" };
        console.log('constructor')
    }
     componentDidMount(){
        console.log('componentDidMount')
       
     }
     componentWillUnmount(){
         clearInterval(this.interval)
     }
     changeTextFriend(){
        this.setState({who:"Friend"})
         
     }
     changeTextWorld(){
        this.setState({who:"World"})
        

     }
     changeTextReact(){
        this.setState({who:"React"})
         

     }
    render() {
        console.log('render')
    return (<div><p>Hello {this.state.who}</p>
    <button className="button" onClick={() => this.changeTextWorld()}>World</button>
    <button className="button" onClick={() => this.changeTextFriend()} >Friend</button>
    <button className="button" onClick={() => this.changeTextReact()}>React</button>
    </div>
      )
    }
  }


  
  
  export default HelloWorld;