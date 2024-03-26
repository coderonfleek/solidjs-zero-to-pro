import {A} from "@solidjs/router";
import "../styles.css";
const Services = () => {

    return <>
        <div>
        <A href="/" activeClass="active-link" end>Home</A> | 
        <A activeClass="active-link" href="/about">About</A> | 
        <A activeClass="active-link" href="/services">Services</A>
      </div>

      <h1>Services Page</h1>
    </>
    
    
}

export default Services;