let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Cada pixel será um quadrado perfeito de 10x10
let tamanhoPixel = 10;

// O mago agora estará no meio do canvas corretamente
let posX = 20; 
let posY = 10;

// Função para desenhar pixels quadrados corretamente
function desenharPixel(x, y, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x * tamanhoPixel, y * tamanhoPixel, tamanhoPixel, tamanhoPixel);
}

// Função que desenha o mago com pixels 100% quadrados
function desenharMago() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Chapéu 
  desenharPixel(4, 0, "#fff");
  desenharPixel(5, 0, "#fff");
  desenharPixel(6, 0, "#fff");
  desenharPixel(7, 0, "#fff");
  desenharPixel(2, 1, "#fff");
  desenharPixel(3, 1, "#fff");
  desenharPixel(4, 1, "#fff");
  desenharPixel(5, 1, "#fff");
  desenharPixel(6, 1, "#fff");
  desenharPixel(7, 1, "#fff");
  desenharPixel(8, 1, "#fff");
  desenharPixel(9, 1, "#fff");
  desenharPixel(5, 2, "#fff");
  desenharPixel(6, 2, "#fff");
  desenharPixel(7, 2, "#fff");
  desenharPixel(8, 2, "#fff");
  desenharPixel(9, 2, "#fff");
  desenharPixel(10, 2, "#fff");
  desenharPixel(1, 3, "#fff");
  desenharPixel(2, 3, "#fff");
  desenharPixel(3, 3, "#fff");
  desenharPixel(4, 3, "#fff");
  desenharPixel(5, 3, "#fff");
  desenharPixel(6, 3, "#fff");
  desenharPixel(7, 3, "#fff");
  desenharPixel(8, 3, "#fff");
  desenharPixel(9, 3, "#fff");
  desenharPixel(10, 3, "#fff");
  desenharPixel(11, 3, "#fff");
  desenharPixel(12, 3, "#fff");
  desenharPixel(13, 3, "#fff");

  // cabeça
  desenharPixel(10, 5, "#fff");
  desenharPixel(8, 5, "#fff");
  desenharPixel(7, 5, "#fff");
  desenharPixel(5, 5, "#fff");
  desenharPixel(10, 6, "#fff");
  desenharPixel(9, 6, "#fff");
  desenharPixel(6, 6, "#fff");
  desenharPixel(5, 6, "#fff");
  desenharPixel(3, 6, "#fff");
  desenharPixel(9, 7, "#fff");
  desenharPixel(8, 7, "#fff");
  desenharPixel(7, 7, "#fff");
  desenharPixel(6, 7, "#fff");
  desenharPixel(5, 7, "#fff");
  desenharPixel(4, 7, "#fff");

  // corpo (capa)
  desenharPixel(9, 9, "#fff");
  desenharPixel(6, 9, "#fff");
  desenharPixel(5, 9, "#fff");
  desenharPixel(4, 9, "#fff");
  desenharPixel(3, 9, "#fff");
  
  desenharPixel(10, 10, "#fff");
  desenharPixel(5, 10, "#fff");
  desenharPixel(4, 10, "#fff");
  desenharPixel(3, 10, "#fff");
  desenharPixel(2, 10, "#fff");

  desenharPixel(10, 11, "#fff");
  desenharPixel(5, 11, "#fff");
  desenharPixel(4, 11, "#fff");
  desenharPixel(3, 11, "#fff");
  desenharPixel(2, 11, "#fff");

  desenharPixel(10, 12, "#fff");
  desenharPixel(5, 12, "#fff");
  desenharPixel(4, 12, "#fff");
  desenharPixel(3, 12, "#fff");
  desenharPixel(2, 12, "#fff");

  desenharPixel(11, 13, "#fff");
  desenharPixel(10, 13, "#fff");
  desenharPixel(5, 13, "#fff");
  desenharPixel(4, 13, "#fff");
  desenharPixel(2, 13, "#fff");
  desenharPixel(1, 13, "#fff");

}

desenharMago();
