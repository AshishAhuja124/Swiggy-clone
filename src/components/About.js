import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is my cloning website</h2>
            {/* <User  name = {"Ashish function"}/> */}
            <UserClass name = {"Ashish Classes compo"} location={"Hyderabadi class"} />
        </div>
    )
}

export default About;