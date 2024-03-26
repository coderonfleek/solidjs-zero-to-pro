import {useParams} from "@solidjs/router";

const Search = () => {

    const params = useParams();

    const query = params.query || "No query provided";

    return <>
        <div>
            <h1>Search Page</h1>

            <p><b>Search Query:</b> {query}</p>
        </div>
    </>

}

export default Search;