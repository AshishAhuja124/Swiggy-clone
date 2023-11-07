import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    //this is calledd once the component is completely mounted or loaded
    //It is used to make an api calls
    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/AshishAhuja124");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
    }

    //componentDidUpdate is calledd once the new values are updated to DOM
    componentDidUpdate() {
        console.log("componet did update");
    }
    
    //Component will mount be called once the user moves away to other page.
    componentWillUnmount() {
        console.log("component will mount");
    }
    render() {
        const {name, location, login, avatar_url} = this.state.userInfo
        
        return (
            <div className="bg-gray-100 m-4">
                <img  className= "rounded-lg"src = "https://avatars.githubusercontent.com/u/31178991?v=4"></img>
                <h1>Name: {name}</h1>
                <h3>Location: {location}</h3>
                <h4>Github Handle: {login}</h4>
            </div>
        )
    }
}

export default UserClass;