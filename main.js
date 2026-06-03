setSize(600,450);

let tutorialText = new Text("press space while indicator is orange");
tutorialText.setColor("green");
tutorialText.setPosition(0, 20);
add(tutorialText);
let checkBoundMin = new Line(0, 0, 0, 0);
checkBoundMin.lineWidth = 10;
checkBoundMin.setColor("green");
let checkBoundMax = new Line(0, 0, 0, 0);
checkBoundMax.lineWidth = 10;
checkBoundMax.setColor("blue");
checkBoundMin.setPosition(getWidth()/6, getHeight()/4);
checkBoundMax.setPosition(getWidth()/6, getHeight()/4);
checkBoundMin.setEndpoint(getWidth()/6, getHeight()/4);
checkBoundMax.setEndpoint(getWidth()/6, getHeight()/4);
let score = 10;
let currMinAng = 0;
let currMaxAng = 2*Math.PI;
let checkerArc = new Arc(60, Math.PI, 0, 1);
checkerArc.setPosition(getWidth()/6, getHeight()/4)
checkerArc.setFilled(true);
checkerArc.setBorderWidth(16);
checkerArc.setBorderColor("green")
let markerLine = new Line(getWidth()/6, getHeight()/4 - 50, getWidth()/6, getHeight()/4 - 70);
markerLine.lineWidth = 10;
markerLine.setColor("blue");
markerLine.lineWidth = 10;
let timingAngle = 0;
let speed = .5;
let maxAngle = Math.PI;
let arrowNum = 0;
let arrow = {};
let arrowCool = 10;
// starts ticking the undyne section when the score reaches 10
function tickUndyneMini() {
    if (score >= 10) {
        if (Randomizer.nextInt(0, 5) == 1 && arrowCool == 0) {
            arrow[arrowNum] = new Rectangle(20,10);
            arrow[arrowNum].setPosition(getWidth()/6-10, 3*getHeight()/4 )
            switch (Randomizer.nextInt(1,4)) {
                case 1:
                    arrow[arrowNum].move(50,0);
                    break;
                case 2:
                    arrow[arrowNum].move(-50,0);
                    break;
                case 3:
                    arrow[arrowNum].move(0,50);
                    break;
                case 4:
                    arrow[arrowNum].move(0,-50);
                    break;
            }
            add(arrow[arrowNum]);
            arrowNum++;
            arrowCool = 11;
            //if arrow isin't cool, this won't run. :(s
        } else  if (arrowCool == 0) {
            arrowCool = 11;
        }
        arrowCool--;
        console.log(arrowCool);
    }
}
// ticks the timing minigame
function tickTimingMinigame() {
    timingAngle = timingAngle + speed*(Math.PI/180);
    if (currMaxAng > 2*Math.PI) {
            if (timingAngle > Math.PI) {

            } else {
                timingAngle = timingAngle + 2*Math.PI;
            }
        }
        if (timingAngle >= currMinAng && timingAngle <= currMaxAng) {
            markerLine.setColor("orange");
            markerLine.lineWidth = 15;
        } else {
            markerLine.setColor("blue");
            markerLine.lineWidth = 10;
        }
    if (timingAngle >= 2*Math.PI) {
        timingAngle = timingAngle - 2*Math.PI;
    } else if (timingAngle <= 0) {
        timingAngle = timingAngle + 2*Math.PI;
    }
    markerLine.setEndpoint(getWidth()/6+50*Math.cos(timingAngle), getHeight()/4+50*Math.sin(timingAngle));
    markerLine.setPosition(getWidth()/6+70*Math.cos(timingAngle), getHeight()/4+70*Math.sin(timingAngle));
}
//checks if the marker is in the right spot to increase score
function checkTimingMini(keyboard) {
    remove(tutorialText);
    let pointX = getWidth()/6+60*Math.cos(timingAngle);
    let pointY = getHeight()/4+60*Math.sin(timingAngle);
    if (keyboard.key == " ") {
        speed = 0 - speed;
        if (currMaxAng > 2*Math.PI) {
            if (timingAngle > Math.PI) {

            } else {
                timingAngle = timingAngle + 2*Math.PI;
            }
            
        }
        if (timingAngle >= currMinAng && timingAngle <= currMaxAng) {
            maxAngle = maxAngle - (Math.PI/360);
            if (speed < 0) {
                speed = speed - .05
            } else {
                speed = speed + .05
            }
            score++
            currMinAng = Randomizer.nextFloat(0, 2*Math.PI);
            currMaxAng = currMinAng + maxAngle;
            checkBoundMin.setEndpoint(getWidth()/6+70*Math.cos(currMinAng), getHeight()/4+70*Math.sin(currMinAng));
            checkBoundMax.setEndpoint(getWidth()/6+70*Math.cos(currMaxAng), getHeight()/4+70*Math.sin(currMaxAng));
        } else {
            console.log(timingAngle);
            console.log(currMaxAng);
            console.log(currMinAng);
            stopTimer(tickTimingMinigame);
            stopTimer(tickUndyneMini);
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
add(C);
add(markerLine);
add(checkBoundMin);
add(checkBoundMax);
keyDownMethod(checkTimingMini);
setTimer(tickTimingMinigame, 10);
setTimer(tickUndyneMini, 10);