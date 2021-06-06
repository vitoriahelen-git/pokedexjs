const f5 = (novoporkemon) => {
    const imagem = document.getElementById("ftpk");
    const nome = document.getElementById("nomepk"); 

    imagem.src = novoporkemon.sprites.other["official-artwork"].front_default;
    nome.innerHTML = novoporkemon.name
}


const resultadopokemon  = () => {
    const sorteio = Math.round(Math.random() * 150) + 1; 
    const urlpokemon = `https://pokeapi.co/api/v2/pokemon/${sorteio}`;
    return urlpokemon; 
}; 

const Começar = async () => {
    const url = resultadopokemon(); 
    const response = await fetch(url); 
    const result = await response.json();  
    f5(result);
    
    console.log(result.name); 
    console.log(result.sprites.other["official-artwork"]);
}

document.addEventListener('DOMContentLoaded', Começar); 