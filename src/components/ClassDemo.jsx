
import "../styles.css";

const italics = "";
const cancelled = false;

const ClassDemo = () => {

    return <>
        {/* <h3 class={`blueBg whiteColor ${italics}`}>Hey, it's Me</h3> */}

        {/* <h3 class={cancelled? 'strike' : '', "italicsStyle blueBg"}>SolidJS is Awesome</h3> */}

        <h3 classList={
            {
                "strike" : cancelled,
                "blueBg whiteColor italicsStyle": true
            }
        }>Let's work with Class Conditions</h3>
    </>
}

export default ClassDemo;