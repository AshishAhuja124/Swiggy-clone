import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    
    render() {
        const {name, location} = this.props;
        const { count } = this.state;
         
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Count : {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 2
                    })
                }}>Increase Count</button>
                <h3>Location: {location}</h3>
                <h4>Mobile: 1111111</h4>
            </div>
        )
    }
}

export default UserClass;