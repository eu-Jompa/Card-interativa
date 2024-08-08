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
nomeformcard.addEventListener("keyup", setCardNameHtml);
formCardMes.addEventListener("keyup", setformCardMesHtml);
formCardAno.addEventListener("keyup", setformCardAnoHtml);
formCardCvc.addEventListener("keyup", setformCardCvcHtml);


function setCardNumberHtml(e){
    cardNumber.textContent = format(e.target.value);
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

function format(e){
    return e.toString().replace(/\d{4}(?=.)/g, "$& ");
}
