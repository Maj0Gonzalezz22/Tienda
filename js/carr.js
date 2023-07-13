function agregar(){
    let contador = document.getElementById("contador");
    contador.innerHTML=parseInt(contador.innerHTML)+1;
}
function eliminar() {
    let contador=document.getElementById("contador");
    contador.innerHTML=parseInt(contador.innerHTML)-1;
}