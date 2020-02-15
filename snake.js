window.onload = function () {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    var ranking = document.getElementById('ranking');
    var placar = document.getElementById('placar')
    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);

    const velocidade = 1;

    var velocidadeX = velocidadeY = 0;
    var posicaoX = 10;
    var posicaoY = 15;
    var tamanho = 10;
    var quantidade = 60;
    var frutaX = Math.floor(Math.random() * quantidade);
    var frutaY = Math.floor(Math.random() * quantidade);

    var rastro = [];
    calda = 1;

    function game() {
        posicaoX += velocidadeX;
        posicaoY += velocidadeY;
        if (posicaoX < 0) {
            posicaoX = quantidade - 1;
        }
        if (posicaoX > quantidade - 1) {
            posicaoX = 0;
        }
        if (posicaoY < 0) {
            posicaoY = quantidade - 1;
        }
        if (posicaoY > quantidade - 1) {
            posicaoY = 0;
        }

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "green";
        ctx.fillRect(frutaX * tamanho, frutaY * tamanho, tamanho, tamanho);

        ctx.fillStyle = "#ff0000";
        for (var i = 0; i < rastro.length; i++) {
            ctx.fillRect(rastro[i].x * tamanho, rastro[i].y * tamanho, tamanho - 1, tamanho - 1);
            if (rastro[i].x == posicaoX && rastro[i].y == posicaoY) {
                velocidadeX = velocidadeY = 0;
                calda = 1;
                placar.innerHTML = "";
            }
           
        }

        rastro.push({ x: posicaoX, y: posicaoY })
        while (rastro.length > calda) {
            rastro.shift();
        }

        if (frutaX == posicaoX && frutaY == posicaoY) {
            calda++;
            placar.innerHTML++;
            frutaX = Math.floor(Math.random() * quantidade);
            frutaY = Math.floor(Math.random() * quantidade);
        }

    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37: // Left
                velocidadeX = -velocidade;
                velocidadeY = 0;
                break;
            case 38: // up
                velocidadeX = 0;
                velocidadeY = -velocidade;
                break;
            case 39: // right
                velocidadeX = velocidade;
                velocidadeY = 0;
                break;
            case 40: // down
                velocidadeX = 0;
                velocidadeY = velocidade;
                break;
            default:

                break;
        }


    }


}