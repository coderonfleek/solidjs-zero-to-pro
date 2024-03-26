
const CardComponent = (props) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-header text-bg-primary">
                {props.title}
            </div>
            <div class="card-body">
                <p class="card-text">{props.body}</p>
                <a href="#" class="btn btn-primary">{props.btnLabel}</a>
            </div>
        </div>
    )
}

export default CardComponent;