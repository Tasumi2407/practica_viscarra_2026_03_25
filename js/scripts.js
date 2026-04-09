var variableVarPi = 3.141592;
let variableLetEuler= 2.7182;
const contantePlank =6.626070;

console.log(variableVarPi);
console.log(variableLetEuler);
console.log(contantePlank);

console.log({variableVarPi});
console.log({variableLetEuler});
console.log({contantePlank});

let diaActual = new Date();
console.log(diaActual);

let fechahora = diaActual.getDate()+"/"+diaActual.getMonth()+"/"+diaActual.getFullYear()+" "+diaActual.getHours()+":"
+diaActual.getMinutes()+":"+diaActual.getSeconds();
console.log(fechahora);

let dia = diaActual.getDate();
let mes = (diaActual.getMonth() +1 ).toString().padStart(2,"0");
let anio = diaActual.getFullYear();
let hora = diaActual.getHours();
let minutos = diaActual.getMinutes();
let segundo = diaActual.getSeconds();

let fechahora2 =`${dia}/${mes}/${anio}/${hora}:${minutos}:${segundo}`;

console.log (fechahora);
console.log(fechahora2);
//alert(fechahora);
//alert(fechahora2);


let mensajeEnHtml = document.getElementById("mensaje");
//alert(mesnajeEnHtml.textContent);
//alert(mesnajeEnHtml.innerHTML);

let mensajeParrafo = document.getElementById("mensaje").children[0].textContent;
//alert(mensajeParrafo);

let contenedor = document.getElementById("mensaje");
const parrafoMensaje = contenedor.querySelector('[data-identificador="submensaje2"]');
//alert(parrafoMensaje.textContent);

const height = window.innerHeight;
const widht = window.innerWidth;
//alert("su Pantalla posee"+widht+"pixeles de ancho y "+height+"pixeles de alto");
console.log("window.screen.widht:"+widht+"px","window.screen.hight:"+height+"px");
console.log("window.screen.widht:"+window.screen.width+"px","window.screen.hight:"+window.screen.height+"px");
console.log("window .screen.availWidth :"+window.screen.availWidth+"px","window .screen.availHeight :"+window.screen.availHeight+"px" );
console.log("document.body.clientWidth:"+document.body.clientWidth+"px","document.body.clientHeight :"+document.body.clientHeight+"px");

function calcular (psumando,ssumando, salida){
    
    //se capturan los valores
    primerSumando = document.getElementById(psumando);
    segundoSumando= document.getElementById(ssumando);
    
    //se realiza el calculo
    //agregar siempre el ".value" en java nativo
    let calculo = parseFloat(primerSumando.value) + parseFloat (segundoSumando.value);
    
    //se asigna el valor al campo de la salida
    document.getElementById(salida).innerHTML = calculo
}

function crearElemento(url = null){
    if ( url !== null){
        url = url;
    }
    else{
        url ="https://as2.ftcdn.net/jpg/01/09/00/83/220_F_109008395_OQDupHMza1V6CNOzrJwWAKlaktT4IsRW.jpg";
    }

    let objetoimagen = document.createElement("img");
    objetoimagen.id = "imagencreada";
    objetoimagen.src = url;
    objetoimagen.alt = "Icono sobre control de videojuegos";
    objetoimagen.title ="Contrl de Videojuegios";
    objetoimagen.width = 220;
    objetoimagen.height= 165;
    objetoimagen.addEventListener('click', function(){
        objetoimagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkU5595AC-bbsoPF-Ik0WzUbVj9rnAbs9lkw&s";
        objetoimagen.width =225;
        objetoimagen.height = 225;   
    });
    document.getElementById('lienzo').appendChild(objetoimagen);
}