setSize(600,450);

let checkerArc = new Arc(60, 180, 0, 0);
checkerArc.setPosition(getWidth()/6, getHeight()/4)
checkerArc.setFilled(true);
checkerArc.setBorderWidth(16);
checkerArc.setBorderColor("green")
let markerLine = new Line(getWidth()/6, getHeight()/4 - 50, getWidth()/6, getHeight()/4 - 70);
markerLine.lineWidth = 10;
let timingAngle = 0;
let speed = .8;
let maxAngle = 180
function tickTimingMinigame() {
    timingAngle = timingAngle + speed*(Math.PI/180);
    markerLine.setEndpoint(getWidth()/6+50*Math.cos(timingAngle), getHeight()/4+50*Math.sin(timingAngle));
    markerLine.setPosition(getWidth()/6+70*Math.cos(timingAngle), getHeight()/4+70*Math.sin(timingAngle));
}
function checkTimingMini(keyboard) {
    let pointX = getWidth()/6+60*Math.cos(timingAngle);
    let pointY = getHeight()/4+60*Math.sin(timingAngle);
    if (keyboard.key == " ") {
            if (checkerArc.containsPoint(pointX, pointY)) {
                maxAngle--;
                if (speed < 0) {
                    speed = speed - .2
                } else {
                    speed = speed + .2
                }
            } else {
                stopTimer(tickTimingMinigame);
            }
            

    }
}
let lines = {};
for (let i = 0; i != 2; i++) {
    lines[i] = new Line(getWidth()/3 + getWidth()/3*i, getHeight(), getWidth()/3+getWidth()/3*i, 0);
    add(lines[i]);
}
lines[2] = new Line(getWidth(), getHeight()/2, 0, getHeight()/2);
add(lines[2]);
let C = new Circle(60);
C.setPosition(getWidth()/6, getHeight()/4);
C.setFilled(false);
C.setBorderWidth(4);
C.setBorderColor("black");
let blocker = new Circle(52);
blocker.setPosition(getWidth()/6, getHeight()/4);
blocker.setColor("white")
add(C);
add(checkerArc);
add(blocker);
add(markerLine);
keyDownMethod(checkTimingMini);
setTimer(tickTimingMinigame, 10);