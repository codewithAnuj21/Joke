const btn = document.getElementById('btn')
const jokecontainer = document.getElementById('joke')

async function foo(){
    let url = await fetch (' https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    let x = await url.json()
    jokecontainer.textContent = `${x.joke}`
  console.log(x.joke)
}


async function main(){
    let jokes = foo()
    console.log(jokes)
    
}
main()

btn.addEventListener('click',()=>{
    foo()
});
