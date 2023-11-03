import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is my cloning website</h2>
            {/* <User  name = {"Ashish function"}/> */}
            <UserClass name = {"First Child"} location={"Hyderabadi class"} />

        </div>
    )
}

//Life cycle
//  Parent constructorr
//  parent render
 
//  - First constructorr
//  - First render

//  - Second con
//  - Second render

//  - First componentDidMount
//  - Second Component did MouseEvent

//  - Parent componentDidMount

export default About;