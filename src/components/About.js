import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"

const About = () => {
    return (
        <>
            <h1>This is about page</h1>
            <p>This is Food Villa app you can order food anytime </p>
            {/* <Outlet /> */}
            <ProfileClassComponent name="Vrushabh" lastName="Dhone" />
            <ProfileFunctionalComponent name="Vrushabh" lastName="Dhone" />

        </>
    )

}

export default About;