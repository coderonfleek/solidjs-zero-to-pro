
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUsers() {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    return response.json();
    
}

async function fetchUser(id) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
    
}

async function fetchPosts(){

    await delay(4000);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return response.json();
}


const api = {
    fetchUsers,
    fetchUser,
    fetchPosts
}

export default api;