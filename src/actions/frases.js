import store from '../store'
const API='https://api.chucknorris.io/jokes/random';

async function addFrase(text) {
    let frase = await fetch(API);
    let data = await frase.json() 
    let myAction = {
        type: 'ADD_FRASE',
        text:data.value,
    };
    
    store.dispatch(myAction)
    
}

export default addFrase