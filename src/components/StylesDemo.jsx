
const StylesDemo = () => {

    const height = 500;

    return <>
        {/* <div style="width: 200px; height:200px; background-color: blue">

</div> */}
        

        <div style={
            {
                "width": "200px",
                height: `${height}px`,
                "background-color" : "red"
            }
        }></div>
    </>
}

export default StylesDemo;