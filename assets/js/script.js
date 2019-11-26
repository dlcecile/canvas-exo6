var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//carrée
ctx.beginPath();
ctx.rect(0,0,400,400);
ctx.closePath();
ctx.fillStyle="white";
ctx.fill();
// Visage
ctx.beginPath();
ctx.arc(130,120,40,0,Math.PI*2,true);
ctx.strokeStyle = "#976F0F";
ctx.fillStyle = "#976F0F";
ctx.fill();
ctx.stroke();
// sourcil oeil gauche
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.moveTo(102,100);
ctx.quadraticCurveTo(113,90,120,100);
ctx.stroke();
// sourcil oeil droit
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.moveTo(137,100);
ctx.quadraticCurveTo(145,90,155,100);
ctx.stroke();

// Bouche
ctx.beginPath();
ctx.arc(129,134,13,1,Math.PI,false);
ctx.strokeStyle = "red";
ctx.stroke();

// Yeux
ctx.beginPath();
ctx.arc(110,110,7,0,Math.PI*2,false);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(145,110,7,0,Math.PI*2,false);
ctx.fillStyle = "white";
ctx.fill();

// Bras gauche
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(30,150);
ctx.lineTo(100,150);
ctx.moveTo(100,175);
ctx.lineTo(30,175);
ctx.strokeStyle="#976F0F";
ctx.stroke();

// Arc bras gauche
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(30,150);
ctx.quadraticCurveTo(1,160,30,175);
ctx.strokeStyle="#976F0F";
ctx.stroke();

// Arc bras droit
ctx.beginPath();
ctx.strokeStyle="#976F0F";
ctx.lineWidth=2;
ctx.moveTo(230,150);
ctx.quadraticCurveTo(260,161,230,175);
ctx.stroke();
// Bras droit
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(230,150);
ctx.lineTo(150,150);
ctx.moveTo(230,175);
ctx.lineTo(150,175);
ctx.fillStroke="#976F0F";
ctx.stroke();
// jambe gauche
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(100,175);
ctx.lineTo(100,300);
ctx.moveTo(120,300);
ctx.lineTo(120,250);
ctx.fillStroke="#976F0F";
ctx.stroke();
// Arc jambre gauche
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(100,300);
ctx.quadraticCurveTo(110,321,120,300);
ctx.strokeStyle="#976F0F";
ctx.stroke();

// jambre droite
ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(150,175);
ctx.lineTo(150,300);
ctx.moveTo(130,300);
ctx.lineTo(130,250);
ctx.fillStroke="#976F0F";
ctx.stroke();
// Arc jambre droit
ctx.beginPath();
ctx.strokeStyle="#976F0F";
ctx.lineWidth=2;
ctx.moveTo(150,300);
ctx.quadraticCurveTo(138,321,130,300);
ctx.stroke();
// Arc entresjambes
ctx.beginPath();
ctx.strokeStyle="#976F0F";
ctx.lineWidth=2;
ctx.moveTo(120,250);
ctx.quadraticCurveTo(125,241,130,250);
ctx.stroke();
// bouton corps
ctx.beginPath();
ctx.arc(125,190,5,0,Math.PI*2,false);
ctx.arc(125,200,5,0,Math.PI*2,false);
ctx.arc(125,220,5,0,Math.PI*2,false);
ctx.arc(125,230,5,0,Math.PI*2,false);
ctx.fillStyle="purple";
ctx.fill();
