import {A} from "@solidjs/router";
import "../styles.css";
const About = () => {

    return <>
        <div>
        <A href="/" activeClass="active-link" end>Home</A> | 
        <A activeClass="active-link" href="/about">About</A> | 
        <A activeClass="active-link" href="/services">Services</A>
      </div>

      <h1>About Page</h1>
    </>
}

export default About;