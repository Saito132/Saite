
function testar() {
    var n1 = document.getElementById('n1').value
    const text = document.getElementById('text')
 if(n1 == ''){
text.textContent = `O numero é Invalido`
text.style.color = 'blue'
text.style.fontWeight = 'bold'


 }

    else if (n1%2 == 0) {
        
text.textContent = `O numero é Par`
text.style.color = 'green'
text.style.fontWeight = 0


} else {
    
    text.textContent = `O numero é Impar`
    text.style.color = 'red'
    text.style.fontWeight = 0
}

}