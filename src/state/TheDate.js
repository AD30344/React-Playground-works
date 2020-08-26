import React from 'react';

const milliseconds = 1000
setInterval(
  function callback() {
    // update the state.date in here
  },
  milliseconds
)

class TheDate extends React.Component {
    constructor(props){
        super(props)
        this.state = { dateTime: new Date() };
        console.log('constructor')
    }
     componentDidMount(){
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                dateTime: new Date()
            })
          }, 1000)
     }
     componentWillUnmount(){
         clearInterval(this.interval)
     }
    render() {
        console.log('render')
    return (<div>{this.state.dateTime.toLocaleString()}</div>
      )
    }
  }

  
  export default TheDate