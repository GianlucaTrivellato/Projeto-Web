var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var tecla = [];

player = {
    x: 290,
    y: 550,
    raio: 20,
    veloc: 2
};

quadrado1 = {
    x: 0,
    y:120,
    raio:25
};

quadrado2 = {
    x: 510,
    y:220,
    raio:25
};

quadrado3 = {
    x: 0,
    y:320,
    raio:25
};

quadrado4 = {
    x: 510,
    y:420,
    raio:25
};


var placar = 0;
var mortes = 0;

document.addEventListener("keydown", function (e){
    if(!(tecla.includes(parseInt(e.keyCode)))){
        tecla.push(parseInt(e.keyCode));
    }
});
document.addEventListener("keyup", function (e){
    let indice = tecla.indexOf(parseInt(e.keyCode));
    tecla.splice(indice, 1);
});


function desenha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    //Background - parte de baixo:
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 500, canvas.width, canvas.height);
    ctx.stroke();

    //Background - parte de cima:
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, 100);
    ctx.stroke();

    //Background - meio:
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 100, canvas.width, 400);
    ctx.stroke();

    //Faixas da rua - primeira:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 200, canvas.width, 5);
    ctx.stroke();

    //Faixas da rua - segunda:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 300, canvas.width, 5);
    ctx.stroke();

    //Faixas da rua - terceira:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 400, canvas.width, 5);
    ctx.stroke();

    //Faixas da rua - em cima da parte verde em cima:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 100, canvas.width, 5);
    ctx.stroke();

    //Faixas da rua - em cima da parte verde em baixo:
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 500, canvas.width, 5);
    ctx.stroke();

    //Personagem
    var pessoa = new Image();
    pessoa.src = "pessoa.png";
    ctx.drawImage(pessoa, player.x, player.y,player.raio*2,player.raio*2);

    //INIMIGOS:

    //Primeiro:
    var coronavirus = new Image();
    coronavirus.src = "coronavirus.png";
    ctx.drawImage(coronavirus,quadrado1.x, quadrado1.y, quadrado1.raio*2,quadrado1.raio*2);


    //Segundo:
    var coronavirus2 = new Image();
    coronavirus2.src = "coronavirus.png";
    ctx.drawImage(coronavirus2,quadrado2.x, quadrado2.y, quadrado2.raio*2,quadrado2.raio*2);

    //Terceiro:
    var coronavirus3 = new Image();
    coronavirus3.src = "coronavirus.png";
    ctx.drawImage(coronavirus3,quadrado3.x, quadrado3.y, quadrado3.raio*2,quadrado3.raio*2);

    //Quarto:
    var coronavirus4 = new Image();
    coronavirus4.src = "coronavirus.png";
    ctx.drawImage(coronavirus4,quadrado4.x, quadrado4.y, quadrado4.raio*2,quadrado4.raio*2);

    //Placar:
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Placar = " + placar, 0, 15);
    //Mortes:
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Mortes = " + mortes, 500, 15)
}

function pontos(){
    if (player.y < 70){
        player.y = 550;
        player.x = 290;
        placar += 1;
    }
}

function movimento(){
    // W:
    if (tecla.includes(87)) {
        player.y -= player.veloc;
    }
    // S:
    else if (tecla.includes(83)) {
        player.y += player.veloc;
    }
    //D:
    else if (tecla.includes(68)) {
        player.x += player.veloc;
    }
    //A:
    else if (tecla.includes(65)) {
        player.x -= player.veloc;
    }

    //LIMITES:
    if (player.x < 0) {
        player.x = 0;
    }
    else if (player.x + player.raio*2 > canvas.width) {
        player.x = canvas.width - player.raio*2 ;
    }
    else if (player.y < 0) {
        player.y = 0;
    }
    else if (player.y + player.raio*2 > canvas.height) {
        player.y = canvas.height - player.raio*2 ;
    }
};

function colisao1(){ //Primeiro Inimigo:
    if (player.y > 380 && player.y < quadrado4.y + quadrado4.raio * 2) {
        if (player.x + player.raio*2 === quadrado4.x){
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla =  []
        }
        else if (player.x > quadrado4.x && player.x < quadrado4.x + quadrado4.raio * 2){
            alert("Você foi infectado");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = []
        }
    }
}

function colisao3(){ //Terceiro Inimigo:
    if (player.y > 180 && player.y < quadrado2.y + quadrado2.raio * 2){
        if (player.x + player.raio*2 === quadrado2.x){
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = []
        }
        else if (player.x > quadrado2.x && player.x < quadrado2.x + quadrado2.raio * 2){
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = []
        }
    }
}

function colisao2() { //Segundo Inimigo:
    if (player.y > 280 && player.y < quadrado3.y + quadrado3.raio * 2) {
        if (player.x - player.raio * 2 === quadrado3.x) {
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            tecla = []
        }
        else if (player.x > quadrado3.x && player.x < quadrado3.x + quadrado3.raio * 2) {
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = [];
        }
    }
}


function colisao4() { //Ultimo Inimigo:
    if (player.y > 80 && player.y < quadrado1.y + quadrado1.raio * 2) {
        if (player.x - player.raio * 2 === quadrado1.x) {
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = [];

        }
        else if (player.x > quadrado1.x && player.x < quadrado1.x + quadrado1.raio * 2) {
            alert("Você foi infectado!");
            player.x = 290;
            player.y = 550;
            mortes++;
            placar = 0;
            tecla = [];

        }
    }
}

function home() {
    location.href = "Home.html";
};

function game() {
    location.href = "Jogo.html";
};

function sobre() {
    location.href = "Sobre.html";
};




function animacao() {
    //Para os inimigos se mexerem:
    quadrado1.x += 8;
    quadrado2.x -= 7;
    quadrado3.x += 6;
    quadrado4.x -= 5;


    //Para os quadrados voltarem a posição inicial:
    if (quadrado1.x > canvas.width) {
        quadrado1.x = -quadrado1.raio*2;
    }
    else if (quadrado2.x < 0 - quadrado2.raio*2){
        quadrado2.x = canvas.width;
    }
    else if (quadrado3.x > canvas.width) {
        quadrado3.x = - quadrado3.raio*2;
    }
    else if (quadrado4.x < 0 - quadrado4.raio*2) {
        quadrado4.x = canvas.width;
    }


    colisao4();
    colisao3();
    colisao2();
    colisao1();
    pontos();
    desenha();
    movimento();
    requestAnimationFrame(animacao);
}





