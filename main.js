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
let distance = 0;
let background = new WebImage("https://codehs.com/uploads/16e4842676c5a0d9f43299b14c7fd42d")
background.setColor("#DAB1DA");
add(background);
let fourthCool = 9;
let tutorialText = new Text("press space while indicator is orange");
tutorialText.setColor("green");
tutorialText.setPosition(0, 20);
add(tutorialText);
let checkBoundMin = new Line(0, 0, 0, 0);
checkBoundMin.lineWidth = 10;
checkBoundMin.setColor("orange");
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
let circleColor = new Color(0, 0, 0);
let maxAngle = Math.PI;
let arrowNum = 0;
let arrow = {};
let arrowCool = 10;
let playerCircle = new Circle(8);
let shield = new WebImage("https://codehs.com/uploads/03d3252e5994fc46327e869248e29fa8");
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
let randomVariableImUsingForLikeOneLineOfCode = 0;
let playerPos = 1;
let player = new Circle(15);
player.setColor("blue");
player.setOpacity(.5);
player.setPosition(7*getWidth()/8, getHeight()/4);
add(player);
let circlePlayer1 = new Circle(10);
circlePlayer1.setOpacity(1);
circlePlayer1.setPosition(7*getWidth()/8, getHeight()/4);
add(circlePlayer1);
let circlePlayer2 = new Circle(10);
circlePlayer2.setOpacity(1);
circlePlayer2.setPosition(7*getWidth()/8, getHeight()/4-50);
add(circlePlayer2);
let circlePlayer3 = new Circle(10);
circlePlayer3.setOpacity(1);
circlePlayer3.setPosition(7*getWidth()/8, getHeight()/4+50);
add(circlePlayer3);
let hurting = 0;

let miniThreeMin = getHeight()/2+90;
let miniThreeMax = getHeight() - 90;
let enemyCool = 100;
let enemy = {};
let enemyNum = 0;
let link = {};

link[0] ="https://codehs.com/uploads/71343009fdc3a323b7d6828dff9baff5";
link[1] ="https://codehs.com/uploads/88e90a37643a99056e797cb15f69b3de";
link[2] ="https://codehs.com/uploads/d7ec7357bf04e11133d0cfc7d334e10f";
link[3] ="https://codehs.com/uploads/c8f8442202a27d74c2e2af0c6e68d4df";
link[4] ="https://codehs.com/uploads/775da8ef80a8182d5e6ced4c9140680f";
link[5] ="https://codehs.com/uploads/cb678276413c0735f33d3179219fe6c3";
link[6] ="https://codehs.com/uploads/53078ca96a38c6b45665abde47f6fc0f";
link[7] ="https://codehs.com/uploads/120bb5c75dcab2638f1c3a7217f3b2e7";
link[8] ="https://codehs.com/uploads/e6e9ffb781c7c5e658377039be217083";
link[9] ="https://codehs.com/uploads/15d35ff43ad1e6f1bc8e8c34cd86172d";
link[10] ="https://codehs.com/uploads/88e90a37643a99056e797cb15f69b3de";
link[20] ="https://codehs.com/uploads/d7ec7357bf04e11133d0cfc7d334e10f";
link[30] ="https://codehs.com/uploads/c8f8442202a27d74c2e2af0c6e68d4df";
link[40] ="https://codehs.com/uploads/775da8ef80a8182d5e6ced4c9140680f";
link[50] ="https://codehs.com/uploads/cb678276413c0735f33d3179219fe6c3";
link[60] ="https://codehs.com/uploads/53078ca96a38c6b45665abde47f6fc0f";
link[70] ="https://codehs.com/uploads/120bb5c75dcab2638f1c3a7217f3b2e7";
link[80] ="https://codehs.com/uploads/e6e9ffb781c7c5e658377039be217083";
link[90] ="https://codehs.com/uploads/15d35ff43ad1e6f1bc8e8c34cd86172d";
let numbers = {};
for (let u = 0; u != 10; u++) {
    numbers[u] = new WebImage(link[u]);
    numbers[u].setPosition(9999, 9999);
    numbers[u].setSize(96,96);
    add(numbers[u]);
}
for (let u = 10; u != 100; u += 10) {
    numbers[u] = new WebImage(link[u]);
    numbers[u].setPosition(9999, 9999);
    numbers[u].setSize(96,96);
    add(numbers[u]);
}
function tickFourMini() {
    if (score >= 0) {
        circleColor = new Color(randomVariableImUsingForLikeOneLineOfCode, 0, 0);
        switch (playerPos) {
            case 0:
                distance = circlePlayer2.getY() - player.getY();
                break;
            case 1:
                distance = circlePlayer1.getY() - player.getY();
                break;
            case 2:
                distance = circlePlayer3.getY() - player.getY();
                break;
            default:
                break;
        }
        if (Math.abs(distance) <= 1) {
            player.move(0,distance)
        } else {
            player.move(0, distance/10);
        }
        
    }
}

function tickArrowMini() {
    if (score >= 30) {
        playerLine1.setEndpoint(5*getWidth()/6, miniThreeMin);
        playerLine2.setEndpoint(5*getWidth()/6, miniThreeMax);
        if (Randomizer.nextInt(0,2) == 2 && enemyCool <= 0) {
            enemy[enemyNum] = new WebImage("https://codehs.com/uploads/04b941dc93035ed51c9aa77e6f639b2b");
            enemy[enemyNum].setPosition(4*getWidth()/6 + 180*Randomizer.nextInt(0,1) + 10, getHeight()/2+ Randomizer.nextInt(1,190));
            if (enemy[enemyNum].getX() > 5*getWidth()/6) {
                enemy[enemyNum].arrowDir = 1;
                enemy[enemyNum].rotate(180);
                enemy[enemyNum].move(-32, 0);
            } else {
                enemy[enemyNum].arrowDir = 0
            }
            enemy[enemyNum].hasScored = 0;
            add(enemy[enemyNum]);
            enemyCool = 300;
            enemyNum++;
        }else if (enemyCool <= 0) {
            enemyCool = 51;
        }
        enemyCool--;
        for (let h = 0; h != enemyNum; h++) {
            if (enemy[h].getX() > getWidth() || enemy[h].getX() < 4*getWidth()/6) {
                enemy[h].setPosition(9999,9999);
            } else {
                if (enemy[h].arrowDir == 1) {
                    console.log("a");
                    enemy[h].move(-0.4, 0);
                } else {
                    console.log("b");
                    enemy[h].move(0.4, 0)
                }
            }
            if (enemy[h].arrowDir == 0) {
                if (enemy[h].getX()+32 >= 5*getWidth()/6) {
                    if (enemy[h].hasScored == 1) {
                    } else {
                        if (enemy[h].getY()+16 > miniThreeMin && enemy[h].getY()+16 < miniThreeMax) {
                        if (enemy[h].hasScored == 0) {
                            increaseScore(1);
                            enemy[h].hasScored = 1;
                            }
                        } else {
                            stopTimer(tickTimingMinigame);
                            stopTimer(tickUndyneMini);
                            stopTimer(tickArrowMini);
                            stopTimer(tickFourMini);
                        }
                    }
                    
                }
            } else {
                if (enemy[h].getX() <= 5*getWidth()/6) {
                    if (enemy[h].hasScored == 1) {
                        
                    } else {
                        if (enemy[h].getY()+16 > miniThreeMin && enemy[h].getY()+16 < miniThreeMax) {
                        if (enemy[h].hasScored == 0) {
                            increaseScore(1);
                            enemy[h].hasScored = 1;
                            }
                        } else {
                            stopTimer(tickTimingMinigame);
                            stopTimer(tickUndyneMini);
                            stopTimer(tickArrowMini);
                            stopTimer(tickFourMini);
                        }
                    }
                    
                }
            }
        }
    }
    
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
        numbers[score % 10].setPosition(getWidth()/2-13,getHeight()/4);
        numbers[score - (score % 10)].setPosition(getWidth()/2-74, getHeight()/4);
    } else if(String(score).length == 1) {
        for (let u = 0; u != 10; u++) {
            numbers[u].setPosition(99999, 99999);
        }
        numbers[score].setPosition(getWidth()/2 - 42, getHeight()/4);
    } else {
        stopTimer(tickTimingMinigame);
        stopTimer(tickUndyneMini);
        stopTimer(tickArrowMini);
        stopTimer(tickFourMini);
    }
}

// starts ticking the undyne section when the score reaches 10
function tickUndyneMini() {
    if (score >= 10) {
        if (Randomizer.nextInt(0, 1) == 1 && arrowCool == 0) {
            arrow[arrowNum] = new WebImage("https://codehs.com/uploads/4305411a97058db562620e1ded734ed9");
            arrow[arrowNum].setSize(20,10);
            arrow[arrowNum].rotate(-90)
            arrow[arrowNum].setPosition(getWidth()/6-10, 3*getHeight()/4 )
            switch (Randomizer.nextInt(1,4)) {
                case 1:
                    arrow[arrowNum].rotate(180)
                    arrow[arrowNum].move(75,-5);
                    break;
                case 2:
                    arrow[arrowNum].move(-75,-5);

                    break;
                case 3:
                    arrow[arrowNum].rotate(270);
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
                    stopTimer(tickArrowMini);
                    stopTimer(tickFourMini);
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
                stopTimer(tickArrowMini);
                stopTimer(tickFourMini);
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
        if (keyboard.key == "w") {
            miniThreeMax-=3
            miniThreeMin-=3
            if (miniThreeMin <= getHeight()/2) {
                miniThreeMax+=3
                miniThreeMin+=3
            }
        } else if (keyboard.key == "s"){
            miniThreeMax+=3
            miniThreeMin+=3
            if (miniThreeMax >= 450) {
                miniThreeMax-=3
                miniThreeMin-=3
            }
        }
    if (keyboard.key == "a") {
       playerPos--; 
       if (playerPos < 0) {
        playerPos=0;
       }
    } else if (keyboard.key == "d") {
        playerPos++;
        if (playerPos > 2) {
            playerPos = 2
        }
    }
}
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
setTimer(tickFourMini, 10);