var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Bottom
context.rect(70,280,170,40);
context.fillStyle = "#733635";
context.strokeStyle = "#733635";
context.fill();
context.stroke();

//Mast
context.rect(150,100,10,180);
context.fillStyle = "#733635";
context.strokeStyle = "#733635";
context.fill();
context.stroke();

//Sun
context.beginPath();
context.arc(330,70,45,0,2*Math.PI,true);
context.fillStyle = "yellow";
context.strokeStyle = "yellow";
context.fill();
context.stroke();

//Sail
context.beginPath();
context.moveTo(155,150);
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.fillStyle = "white";
context.strokeStyle = "white";
context.fill();
context.stroke();

//Flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
context.fillStyle = "#EF0107";
context.strokeStyle = "#EF0107";
context.fill();
context.stroke();


//Water
context.beginPath();
context.rect(0,300,400,300);
context.fillStyle = "blue";
context.strokeStyle = "blue";
context.fill();
context.stroke();


// context.moveTo(100,100);
// context.lineTo(150,150);
// context.stroke();