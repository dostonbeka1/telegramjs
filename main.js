function StartBtn() {
    location.href = 'login.html'
}
function StartBtn2() {
    var code = document.getElementById('codecode').value
    localStorage.setItem('code',code)
    location.href = 'home.html'
}
var concode = '+998'

function StartBtn1() {
    var phonenumber = document.getElementById('phonenumber');

    if(phonenumber.value == ''){
        phonenumber.style.borderBottom = '1px solid red'
        phonenumber.placeholder = ''
        phonenumber.focus()
    }else{
        document.getElementById('logininp').style.display = 'none'
        document.getElementById('codeinp').style.display = 'block'
        localStorage.setItem('number',concode+phonenumber.value)
        Ish()
    }
}
var phonenumber = document.getElementById('phonenumber');

phonenumber.addEventListener('keypress',()=>{
    phonenumber.style.borderBottom = '1px solid #134a5d'
})
function Ish() {
    var number = localStorage.getItem('number')
    document.getElementById('myphone').innerHTML = number
}



var country = document.getElementById('country');
var disinput = document.getElementById('disinput')

country.addEventListener('change',()=>{
    console.log(country.value);
    disinput.value = country.value
    concode = country.value
})









