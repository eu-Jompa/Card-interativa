const nomeformcard = document.querySelector('#formNomeCard');
const numeroformcard = document.querySelector("#formNumeroCard");
const buttonForm = document.querySelector("#form-confirm");
const formCardMes = document.querySelector(".form-input-mes");
const formCardAno = document.querySelector(".form-input-ano");
const formCardCvc = document.querySelector(".form-input-cvc");



const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardMes = document.querySelector(".card-mes");
const cardAno = document.querySelector(".card-ano");
const cardCvc= document.querySelector(".card-cvc");

buttonForm.addEventListener("click",(e)=>{
    e.preventDefault();

});

numeroformcard.addEventListener("keyup", setCardNumberHtml);
numeroformcard.addEventListener("keydown", FilterNumber);
nomeformcard.addEventListener("keyup", setCardNameHtml);
formCardMes.addEventListener("keyup", setformCardMesHtml);
formCardAno.addEventListener("keyup", setformCardAnoHtml);
formCardCvc.addEventListener("keyup", setformCardCvcHtml);


//Filtrando aceitando apenas números na input
function FilterNumber(e){
    const chavesPermitidas = ["Backspace","Delete","ArrowLeft","ArrowRight","Tab"];
    if(chavesPermitidas.includes(e.key)|| e.key>=0 && e.key<=9){
        return
    }
    e.preventDefault();
}

function setCardNumberHtml(e){
    let value = e.target.value;

    cardNumber.textContent = format(value);
    if(value.length<=16){
        if (value.length > 16){ 
            value = value.slice(0, 16); // Limita a 16 dígitos
            return value.replace(/\d{4}(?=.)/g, "$& ");    
        }
    }
} 
function setCardNameHtml(e){
    cardName.textContent = e.target.value;

}


function setformCardMesHtml(e){
    cardMes.textContent = e.target.value;
}
function setformCardAnoHtml(e){
    cardAno.textContent = e.target.value;

}
function setformCardCvcHtml(e){
    cardCvc.textContent = e.target.value;
}

function format(value){
    if(value.length<=16){
        if (value.length > 16){ 
            value = value.slice(0, 16); // Limita a 16 dígitos
            return value.replace(/\d{4}(?=.)/g, "$& ");    
        }
        
        
        return value.replace(/\d{4}(?=.)/g, "$& ");

    }
    return value = value.slice(0, 16).replace(/\d{4}(?=.)/g, "$& ");
}
