var quotes = "“ Everything has beauty, but not everyone sees it. ”";

var quote_number = 0;

var quote_main = document.getElementById("quoteid");

function update_quote(){
    if (quote_number>=quotes.length){
        quote_main.style.filter = 'brightness(0%)';
        clearInterval(hello_quote);
        return
    }

    else{
        quote_main.textContent += quotes[quote_number];
        quote_number += 1;
    }
}

quote_main.addEventListener("mouseover",()=>{
    quote_main.style.filter = 'brightness(100%)';
})  
quote_main.addEventListener("mouseout",()=>{
    quote_main.style.filter = 'brightness(0%)';
})  

var hello_quote = setInterval(update_quote,30);