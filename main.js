setSize(600,450);
//0  1  2 
//3  4  5  6 
//7  8  9 
// lock https://codehs.com/uploads/d3355b4942c62d2c8f532a1641b9919b
// arrow https://codehs.com/uploads/367d3adfccdc9d7b788096f17281900b
// ship https://codehs.com/uploads/04b941dc93035ed51c9aa77e6f639b2b
// lock breaking https://codehs.com/uploads/1d92da90c5c74318fb4060c3e466c6bf
// laser https://codehs.com/uploads/30e7b180cc8fc982f6c93ea3424a4cb8
// horizontal laser https://codehs.com/uploads/dbedd67170d8c7a9b1b3c1fe59e7994e
let background = new Rectangle(getWidth(), getHeight());
background.setColor("#DAB1DA");
add(background);
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
checkBoundMin.setPosition(getWidth()/8, getHeight()/4);
checkBoundMax.setPosition(getWidth()/8, getHeight()/4);
checkBoundMin.setEndpoint(getWidth()/8, getHeight()/4);
checkBoundMax.setEndpoint(getWidth()/8, getHeight()/4);
let score = 0;
let currMinAng = 0;
let currMaxAng = 2*Math.PI;
let markerLine = new Line(getWidth()/8, getHeight()/4 - 50, getWidth()/8, getHeight()/4 - 70);
markerLine.lineWidth = 10;
markerLine.setColor("blue");
markerLine.lineWidth = 10;
let timingAngle = 0;
let speed = .5;
let maxAngle = Math.PI;
let arrowNum = 0;
let arrow = {};
let arrowCool = 10;
let playerCircle = new Circle(8);
let shield = new WebImage("https://codehs.com/uploads/07538adb23f4eef818dd13f64d1723df");
shield.setPosition(getWidth()/6+5, 3*getHeight()/4-10)
add(shield);
playerCircle.setPosition(getWidth()/6, 3*getHeight()/4);
add(playerCircle); 
let playerLine1 = new Line(5*getWidth()/6, getHeight()/2, 5*getWidth()/6, getHeight()/2 + 90);
let playerLine2 = new Line(5*getWidth()/6, getHeight(), 5*getWidth()/6, getHeight() - 90);
playerLine1.lineWidth = 10;
playerLine2.lineWidth = 10;
add(playerLine1);
add(playerLine2);
let enemyCool = 100;
let enemy = {};
let enemyNum = 0
// images for the score numbers (unfini)
let link = {};

link[0] ="https://codehs.com/uploads/2a88de20bbeef080be94572b57cfffb7";
link[1] ="https://codehs.com/uploads/d41917d8e296c2d380faadb4f8ba8d55";
link[2] ="https://codehs.com/uploads/1bf7421afc7c5a7d7b35e66eedce00d4";
link[3] ="https://codehs.com/uploads/7f641724028c26f57df611e27878885c";
link[4] ="https://codehs.com/uploads/e80d3268f5c115b7e4f37a614a606d40";
link[5] ="https://codehs.com/uploads/18eab2b3498351ec6c34368e627ea4e0";
link[6] ="https://codehs.com/uploads/8b09004f76b166df7ce7e722d74f145c";
link[7] ="https://codehs.com/uploads/4b9e6eebf1b22c94384afd13d2662a71";
link[8] ="https://codehs.com/uploads/49820f66aee096d0b57bd0284a5c698f";
link[9] ="https://codehs.com/uploads/0b51d0feb8c0b81fa30c942da985f159";
link[10] ="https://codehs.com/uploads/d41917d8e296c2d380faadb4f8ba8d55";
link[20] ="https://codehs.com/uploads/1bf7421afc7c5a7d7b35e66eedce00d4";
link[30] ="https://codehs.com/uploads/7f641724028c26f57df611e27878885c";
link[40] ="https://codehs.com/uploads/e80d3268f5c115b7e4f37a614a606d40";
link[50] ="https://codehs.com/uploads/18eab2b3498351ec6c34368e627ea4e0";
link[60] ="https://codehs.com/uploads/8b09004f76b166df7ce7e722d74f145c";
link[70] ="https://codehs.com/uploads/4b9e6eebf1b22c94384afd13d2662a71";
link[80] ="https://codehs.com/uploads/49820f66aee096d0b57bd0284a5c698f";
link[90] ="https://codehs.com/uploads/0b51d0feb8c0b81fa30c942da985f159";
let scoreText = new WebImage("https://codehs.com/uploads/d356c669da69b7790f73e290ea09c02c");
scoreText.setPosition(getWidth()/2 - 128, getHeight()/4 - 50)
add(scoreText);
let numbers = {};
for (let u = 0; u != 10; u++) {
    numbers[u] = new WebImage(link[u]);
    numbers[u].setPosition(9999, 9999);
    numbers[u].setSize(96,96);
    add(numbers[u]);
}
for (let u = 10; u != 90; u += 10) {
    numbers[u] = new WebImage(link[u]);
    numbers[u].setPosition(9999, 9999);
    numbers[u].setSize(96,96);
    add(numbers[u]);
}
function tickArrowMini() {
    if (Randomizer.nextBoolean() && enemyCool == 0) {
        enemy[enemyNum] = new WebImage("https://codehs.com/uploads/04b941dc93035ed51c9aa77e6f639b2b");
        enemy[enemyNum].setPosition(5*getHeight()/6 + 100*Randomizer.nextInt(0,1), getHeight()/2+ Randomizer.nextInt(1,220));
        add(enemy[enemyNum]);
        enemyCool = 100;
        enemyNum++
    }
    enemyCool--;
}
function increaseScore(amount) {
    score = score + amount
    console.log(score);
    if (String(score).length == 2) {
        for (let u = 0; u != 10; u++) {
            numbers[u].setPosition(99999, 99999);
        }
        for (let u = 10; u != 90; u += 10) {
            numbers[u].setPosition(9999, 9999)
        }
        numbers[score % 10].setPosition(getWidth()/2,getHeight()/4 + 10);
        numbers[score - (score % 10)].setPosition(getWidth()/2-96, getHeight()/4+10);
    } else if(String(score).length == 1) {
        for (let u = 0; u != 10; u++) {
            numbers[u].setPosition(99999, 99999);
        }
        numbers[score].setPosition(getWidth()/2 - 48, getHeight()/4 + 10);
    } else {
        //REPLACE WITH WIN CONDITION
    }
}

// starts ticking the undyne section when the score reaches 10
function tickUndyneMini() {
    if (score >= 10) {
        if (Randomizer.nextInt(0, 1) == 1 && arrowCool == 0) {
            arrow[arrowNum] = new Rectangle(20,10);
            arrow[arrowNum].setPosition(getWidth()/6-10, 3*getHeight()/4 )
            switch (Randomizer.nextInt(1,4)) {
                case 1:
                    arrow[arrowNum].move(75,-5);
                    break;
                case 2:
                    arrow[arrowNum].move(-75,-5);

                    break;
                case 3:
                    arrow[arrowNum].rotate(90);
                    arrow[arrowNum].move(0,75);
                    break;
                case 4:
                    arrow[arrowNum].rotate(90);
                    arrow[arrowNum].move(0,-75);
                    break;
            }
            add(arrow[arrowNum]);
            arrowNum++;
            arrowCool = 101;
            //if arrow isin't cool, this won't run. :(
        } else  if (arrowCool == 0) {
            arrowCool = 101;
        }
        arrowCool--;
        //this makes the arrows move
        for (let o = 0; o != arrowNum; o++) {
            if (arrow[o].getX() > 25 + playerCircle.getX() || arrow[o].getX() < playerCircle.getX() - 45) {
                if (arrow[o].getX() < playerCircle.getX()) {
                    arrow[o].move(.2,0);
                } else {
                    arrow[o].move(-.2,0);
                }
            } else if (arrow[o].getY() > 28 + playerCircle.getY() || arrow[o].getY() < playerCircle.getY() - 38) {
                if (arrow[o].getY() < playerCircle.getY()) {
                    arrow[o].move(0,.2);
                } else if (arrow[o].getY() > playerCircle.getY()){
                    arrow[o].move(0,-.2);
                }
            } else {
                if (shield.containsPoint(arrow[o].getX(), arrow[o].getY())) {
                    arrow[o].setPosition(999999, 99999)
                    increaseScore(1);
                } else {
                    stopTimer(tickTimingMinigame);
                    stopTimer(tickUndyneMini);
                }
            }
        }

    }
}
// ticks the timing minigame
function tickTimingMinigame() {
    timer = 1
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
    markerLine.setEndpoint(getWidth()/8+50*Math.cos(timingAngle), getHeight()/4+50*Math.sin(timingAngle));
    markerLine.setPosition(getWidth()/8+70*Math.cos(timingAngle), getHeight()/4+70*Math.sin(timingAngle));
}
//checks if the marker is in the right spot to increase score
function checkAllMini(keyboard) {
        remove(tutorialText);
        let pointX = getWidth()/8+60*Math.cos(timingAngle);
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
                increaseScore(1);
                currMinAng = Randomizer.nextFloat(0, 2*Math.PI);
                currMaxAng = currMinAng + maxAngle;
                checkBoundMin.setEndpoint(getWidth()/8+70*Math.cos(currMinAng), getHeight()/4+70*Math.sin(currMinAng));
                checkBoundMax.setEndpoint(getWidth()/8+70*Math.cos(currMaxAng), getHeight()/4+70*Math.sin(currMaxAng));
            } else {
                console.log(timingAngle);
                console.log(currMaxAng);
                console.log(currMinAng);
                stopTimer(tickTimingMinigame);
                stopTimer(tickUndyneMini);
            }


        }
        switch (keyboard.key) {
            case "ArrowUp":
                shield.setRotation(270);
                shield.setPosition(getWidth()/6 - 20, 3*getHeight()/4 - 40);
                break;
            case "ArrowDown":
                shield.setRotation(90);
                shield.setPosition(getWidth()/6 - 20, 3*getHeight()/4 + 20);
                break;
            case "ArrowRight":
                shield.setRotation(0);
                shield.setPosition(getWidth()/6 + 10, 3*getHeight()/4 - 10);
                break;
            case "ArrowLeft":
                shield.setRotation(180);
                shield.setPosition(getWidth()/6 - 50, 3*getHeight()/4 - 10);
                break;
            default:
                break;
        }
}
let lines = {};
for (let i = 0; i != 2; i++) {
    lines[i] = new Line(getWidth()/4 + getWidth()/4*i*2, getHeight()/2, getWidth()/4+getWidth()/4*i*2, 0);
    add(lines[i]);
}
lines[2] = new Line(getWidth(), getHeight()/2, 0, getHeight()/2);
add(lines[2]);
lines[3] = new Line( 2*getWidth()/3, getHeight()/2, 2*getWidth()/3, getHeight());
add(lines[3]);
lines[4] = new Line( getWidth()/3, getHeight()/2, getWidth()/3, getHeight());
add(lines[4]);
let C = new Circle(60);
C.setPosition(getWidth()/8, getHeight()/4);
C.setFilled(false);
C.setBorderWidth(4);
C.setBorderColor("black");
add(C);
add(markerLine);
add(checkBoundMin);
add(checkBoundMax);
keyDownMethod(checkAllMini);
setTimer(tickTimingMinigame, 10);
setTimer(tickUndyneMini, 10);
setTimer(tickArrowMini, 10);