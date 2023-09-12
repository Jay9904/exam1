const { Component } = require("react");

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name: "helloe Boo",
            price: 500,
        }
    }
    render() {

        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.price}</h1>
                <button>Update</button>
            </div>
        )
    }
}

export default Demo;