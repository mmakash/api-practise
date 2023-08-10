const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = element => {
    const blockQuote = document.getElementById('quote');
    console.log(element);
    blockQuote.innerText = element.quote;
}
