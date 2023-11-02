import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
    }

    
    render() {
        const {name, location} = this.props;
        const { count, count2 } = this.state;
         
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Count : {count}</h2>
                <h2>Count2 : {count2}</h2>
                <h3>Location: {location}</h3>
                <h4>Mobile: 1111111</h4>
            </div>
        )
    }
}

export default UserClass;