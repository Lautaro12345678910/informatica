const cuerpo = document.getElementById('cuerpoPagina');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnRojo = document.getElementById('btnRojo');
function cambiarEstilo(bgColor, textColor) {
cuerpo.style.backgroundColor = bgColor;
cuerpo.style.color = textColor;
}
btnAzul.addEventListener('click', function() {
    cambiarEstilo('#E0F7FA', '#01579B'); 
});
btnVerde.addEventListener('click', function() {
    cambiarEstilo('#1B5E20', '#C8E6C9');
});
btnRojo.addEventListener('click', function() {
    cambiarEstilo('#FFEBEE', '#B71C1C'); 
});