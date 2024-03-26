

const EventsDemo = () => {

    const handleFunction = (event) => {
        console.log(event);
    }

    return <>

        <button class="btn btn-primary" on:click={handleFunction}>Do Stuff</button>
    </>
}

export default EventsDemo;