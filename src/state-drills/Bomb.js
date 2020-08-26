import React from 'react';

const milliseconds = 1000
setInterval(
    function callback() {
        // update the state.date in here
    },
    milliseconds
)

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
        console.log('constructor')
    }
    componentDidMount() {
        setInterval( ()=>{
            this.setState({
                count: this.state.count + 1,
            });
        }, 1000)

    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (<div>
            
            { this.state.count % 2 === 0 && <p>Tick</p>}
            { this.state.count % 2 === 1 && <p>Tock</p>}
            { this.state.count >= 8 && <p>Boom!!!</p>}
        </div>
        )
    }
}




export default Bomb;