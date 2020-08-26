import React from 'react';


const milliseconds = 1000
setInterval(
    function callback() {
        // update the state.date in here
    },
    milliseconds
)

class RoulletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = { chamber: null, spinningTheChamber: false }

    }
    componentDidMount() {
        // let timeout = setTimeout
        // clearTimeout(callback, timeInMs)



    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    RoulletteGun() {
        this.setState({ spinningTheChamber: true })
        setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            });
        }, 2000)
    }
    render() {
        return (
            <div>
                {this.state.spinningTheChamber === true && <p>spinning the chamber and pulling the trigger! ...</p>}
                {this.state.chamber != this.props.bulletInTheChamber && <p>you're safe!</p>}
                {this.state.chamber === this.props.bulletInTheChamber && <p>BANG!!!</p>}
                    <button className="button" onClick={() => this.RoulletteGun()}> Pull the trigger!</button>
            </div>

        )
    }

}

export default RoulletteGun;

