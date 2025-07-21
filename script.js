
function carregar() {
var msg= window.document.getElementById('msg');
var img= window.document.getElementById('imagem');
var data= new Date();
var hora=data.getHours();
msg.innerHTML='Agora são ' + hora + ' horas ' ;
                                                           
if(hora >= 12 && hora < 18){
img.src='fototarde.png'
document.body.style.background='#ee8a29'}
else if(hora >= 0 && hora < 12){
    img.src='fotomanha.png'
    document.body.style.background='#b0a694'}
    else
    {img.src='fotonoite.png'
        document.body.style.background='#1f4066'
    }
}

