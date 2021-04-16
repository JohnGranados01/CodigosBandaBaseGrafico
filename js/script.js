var salida = document.getElementById("output");


function send(){
    var aux = document.getElementById("caracter");
    var caracteres = [];
    valor = aux.value;
    if(valor.length==1){
        for (var i = 0; i < valor.length; i++){
            caracteres[i] = valor.charAt(i).charCodeAt(0);
        }
        var out = caracteres.toString();
        var numero = binario(out);
        salida.innerHTML = '<div class="alert alert-info" id="div" style="width: 250px;" role="alert">'+
        '<h6 style="color:black;">'+"Informacion de Interes"+'</h6>'
        +'<div>'+"Caracter Ingresado: "+'<h6 style="color:black;">'+valor+'</h6>'+'</div>'+
        '<div>'+"Valor Correspondiente  en ASCII: "+'<h6 style="color:black;">'+out+'</h6>'+'</div>'+
        '<div>'+"Valor en binario: "+'<h6 style="color:black;">'+0+numero+'</h6>'+'</div>'+'</div>';
        return 0+numero;
    }else{
        alert("Ingrese solo un caracter!");
        return null;
    }
    
}

function binario(num){
    var entero = parseInt(num);
    var numero = entero.toString(2);
    return numero;
}

function borrar(){
   document.getElementById("caracter").value="";
}

//codigos de graficas

//Grafica Unipolar +
function primera(){
    var arreglo = [];
    var entero = send();
    const split = entero.split("");
    for(var x =0; x<entero.length;x++){
        arreglo.push({
            x: split[x],
            y: split[x]
        });
    }

    window.m = Morris.Line({
    element: 'graph',
    data: arreglo,
    xkey: 'x',
    ykeys: ['y'],
    labels: ['numero binario'],
    parseTime: false,
    hoverCallback: function (index, options, default_content, row) {
        return default_content.replace("numero binario", "(" + row.x + ")");
    },
    xLabelMargin: 10,
    resize: true,
    grid: true,
    integerYLabels: true
    });
}

//Grafica Unipolar -
function segunda(){
    var lista = [];
    var cambio = [];
    var entero = send();
    const split = entero.split("");
    for(var x =0; x<entero.length;x++){
        if(split[x]=="1"){
            var replace1 = split[x].replace(/1/g,-1);
            lista.push(replace1);
        }else{            
            lista.push(split[x]);
        }
        cambio.push({
            x:split[x],
            y:lista[x]
        });
    }

    window.m = Morris.Line({
    element: 'graph2',
    data: cambio,
    xkey: 'x',
    ykeys: ['y'],
    labels: ['numero binario'],
    parseTime: false,
    hoverCallback: function (index, options, default_content, row) {
        return default_content.replace("numero binario", "(" + row.x + ")");
    },
    xLabelMargin: 10,
    resize: true,
    grid: true,
    integerYLabels: true
    });
}

//Grafica Polar de 1
function tercera(){
    var lista = [];
    var cambio = [];
    var entero = send();
    const split = entero.split("");
    for(var x =0; x<entero.length;x++){
        if(split[x]=="0"){
            var replace1 = split[x].replace(/0/g,-1);
            lista.push(replace1);
        }else{
            lista.push(split[x]);
        }
        cambio.push({
            x:split[x],
            y:lista[x]
        });
    }

    window.m = Morris.Bar({
    element: 'graph3',
    data: cambio,
    xkey: 'x',
    ykeys: ['y'],
    labels: ['numero binario'],
    parseTime: false,
    hoverCallback: function (index, options, default_content, row) {
        return default_content.replace("numero binario", "(" + row.x + ")");
    },
    xLabelMargin: 10,
    resize: true,
    grid: true,
    integerYLabels: true
    });
}

//Grafica Polar de 0
function cuarta(){
    var lista = [];
    var cambio = [];
    var entero = send();
    const split = entero.split("");
    for(var x =0; x<entero.length;x++){
        if(split[x]=="0"){
            var replace1 = split[x].replace(/0/g,1);
            lista.push(replace1);
        }else{
            var replace2 = split[x].replace(/1/g,-1);
            
            lista.push(replace2);
        }
        cambio.push({
            x:split[x],
            y:lista[x]
        });
    }

    window.m = Morris.Bar({
    element: 'graph4',
    data: cambio,
    xkey: 'x',
    ykeys: ['y'],
    labels: ['numero binario'],
    parseTime: false,
    hoverCallback: function (index, options, default_content, row) {
        return default_content.replace("numero binario", "(" + row.x + ")");
    },
    xLabelMargin: 10,
    resize: true,
    grid: true,
    integerYLabels: true
    });
}

//Grafica Bipolares de 1

function quinta(){
    var arreglo = [];
    var lista = [];
    var entero = send();
    const split = entero.split("");
    var polaridad = true;
    for(var x =0; x<entero.length;x++){
        if(split[x]=="1"){
            var replace1;
            if(polaridad==false){
                replace1 = split[x].replace(/1/g,-1);
            }else{
                replace1 = split[x].replace(/1/g,1);
            } 
            lista.push(replace1);
            polaridad = !polaridad;
        }else{
            lista.push(split[x]);
        }
        arreglo.push({
            x: split[x],
            y: lista[x]
        });
    }

    window.m = Morris.Bar({
    element: 'graph5',
    data: arreglo,
    xkey: 'x',
    ykeys: ['y'],
    labels: ['numero binario'],
    parseTime: false,
    hoverCallback: function (index, options, default_content, row) {
        return default_content.replace("numero binario", "(" + row.x + ")");
    },
    xLabelMargin: 10,
    resize: true,
    grid: true,
    integerYLabels: true
    });
}


$("#btnAceptar").on("click", function(){
    quinta();
    
}); 
$("#btnPrimera").on("click", function(){
    primera();
}); 

$("#btnSegunda").on("click", function(){
    segunda();
}); 

$("#btnTercera").on("click", function(){
    tercera();
}); 

$("#btnCuarta").on("click", function(){
    cuarta();
}); 