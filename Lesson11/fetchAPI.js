//'https://pokeapi.co/api/v2/pokemon/ditto'

// async - await
async function fetchApi() {
    console.log('start');
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log('End');
}

fetch('/login', {
    method: 'POST',
    body: {
        username: 'hfjahdjkf',
        password: 'jdahfsf'
    },
    headers: {

    }
})

fetchApi();