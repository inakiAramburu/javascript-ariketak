var canvas = document.querySelector('canvas');

var ctx = canvas.getContext("2d");  

var width = canvas.width = window.innerWidth;   //Establece que el ancho y alto del canvas sea igual que el tamaño del buscador
var height = canvas.height = window.innerHeight;

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {  //Declaras las propiedades que tiene que tener una pelota
  this.x = x; //posición horizontal
  this.y = y; //posición vertical
  this.velX = velX; //velocidad horizontal
  this.velY = velY; //velocidad vertical
  this.color = color; //color
  this.size = size; //tamaño
}

Ball.prototype.draw = function() {  //Funcion para dibujar una pelota
  ctx.beginPath(); //Para declarar que empezamos a dibujar un aforma en el canvas
  ctx.fillStyle = this.color;   //Para declarar el color que tendra la pelota en este caso. Se relaciona con la propiedad de color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);  //Con arc() se crea un arco. "x" e "y" marcan el centro del circulo, "size" el radio y despues el angulo donde empieza y luego el angulo donde acaba (2PI = 360º)
  ctx.fill();  //Se termina de dibujar y rellena el dibujo con el color de "fillStyle" 
};

Ball.prototype.update = function ()
{
  if ((this.x + this.size) >= width) { //Mira si la posicion de la pelota mas su radio es MAYOR que el la ANCHURA MAXIMA de la pantalla
    this.velX = -(this.velX);          //Si lo es invierte la velocidad en el eje X
  }

  if ((this.x - this.size) <= 0) {     //Mira si la posicion de la pelota mas su radio es MENOR que el la ANCHURA MINIMA de la pantalla
    this.velX = -(this.velX);          //Si lo es invierte la velocidad en el eje X
  }

  if ((this.y + this.size) >= height) {  //Mira si la posicion de la pelota mas su radio es MAYOR que el la ALTURA MAXIMA de la pantalla
    this.velY = -(this.velY);            //Si lo es invierte la velocidad en el eje Y
  }

  if ((this.y - this.size) <= 0) {       //Mira si la posicion de la pelota mas su radio es MENOR que el la ALTURA MINIMA de la pantalla
    this.velY = -(this.velY);            //Si lo es invierte la velocidad en el eje Y
  }

  this.x += this.velX;
  this.y += this.velY;
};

var balls = [];

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; //Los primeros tres numeros establecen el color del fondo del canvas y el cuarto su transparencia. Con el que se puede jugar para conseguir ejectos de escenas anteriosres(como rastros)
  ctx.fillRect(0, 0, width, height);  //Esto crea un rectangulo, que se sobrepone cada "frame" para eliminar el rastro o el "frame" anterior

  while (balls.length < 25) {  //Crea hasta 25 pelotas y despues no vuelve a entrar en el while, lo que hace qe no cambie los valores de velocidad ni color de las pelotas
    var size = random(10, 20);
    var ball = new Ball( // la posición de las pelotas, se dibujará al menos siempre como mínimo a un ancho de la pelota de distancia al borde del canvas, para evitar errores en el dibujo
      random(0 + size, width - size), //Esto marca la POSICION en le eje X que estara la pelota
      random(0 + size, height - size), //Esto marca la POSICION en le eje Y que estara la pelota
      random(-7, 7), //Esto marca la VELOCIDAD en el eje X que tendra la pelota
      random(-7, 7), //Esto marca la VELOCIDAD en el eje Y que tendra la pelota
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')', //Esto muestra que color tendra la pelota
      size  //Antes se ha iniciado en una variable el radio de la pelota
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop); //Para llamar en bucle a una funcion
}

loop();

