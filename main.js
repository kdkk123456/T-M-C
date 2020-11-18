canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1width=100;
var car1height=100;
var car1X=10;
var car1Y=10;
var background="racetrack.jpg";
var car1="car.png";
var car2width=100;
var car2height=100;
var car2X=10;
var car2Y=120;
var car2="OIP.jpg";
function add(){
    bg=new Image();
    bg.onload=uploadbg;
    bg.src=background;
    
    car1img=new Image();
    car1img.onload=uploadcar1;
    car1img.src=car1;

    car2img=new Image();
    car2img.onload=uploadcar2;
    car2img.src=car2;
}
function uploadbg(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1img,car1X,car1Y,car1width,car1height);
}
function uploadcar2(){
    ctx.drawImage(car2img,car2X,car2Y,car2width,car2height);
}
window.addEventListener("keydown",kd)
function kd(e){
var keynumber=e.keyCode
console.log(keynumber)
if (keynumber==37){
    left()
    console.log("left is pressed")
    }
    if (keynumber==38){
        up()
}
if (keynumber==39){
    right()
}
if (keynumber==40){
    down()
}
if (keynumber==87){
    up2()
}
if (keynumber==65){
    left2()
}
if (keynumber==68){
    right2()
}
if (keynumber==83){
    down2()
}
}
function up() {
    if(car1Y>=0){
    car1Y=car1Y-10
    uploadbg();
    uploadcar1();
}
}
function down() {
    if(car1Y<=500) {
        car1Y=car1Y+10
        uploadbg();
        uploadcar1();
    }
}
function right(){
    if(car1X<=700){
        car1X=car1X+10
        uploadbg();
        uploadcar1();
    }
}
function left() {
    if(car1X>=0){
        car1X=car1X-10
        uploadbg();
        uploadcar1();
    }
}
function up2() {
    if(car2Y>=0){
    car2Y=car2Y-10
    uploadbg();
    uploadcar2();
}
}
function down2() {
    if(car2Y<=500) {
        car2Y=car2Y+10
        uploadbg();
        uploadcar2();
    }
}
function right2(){
    if(car2X<=700){
        car2X=car2X+10
        uploadbg();
        uploadcar2();
    }
}
function left2() {
    if(car2X>=0){
        car2X=car2X-10
        uploadbg();
        uploadcar2();
    }
}