var aX = new Array(2);
var aY = new Array(2);
var aZ = new Array(2);

var playMovePoint = 0.0;

function loopFunc() {
  main();
}
// 繰り返す回数
var loopTimes = 10;
// 繰り返す間隔(ミリ秒)
var loopInterval = 1000;

var count = 0;
var countup = function(){
    console.log(count++);
}

var loop = setInterval(function(){
    loopFunc();
    countup();
    if(count >= loopTimes){
        clearInterval(loop);
    }
}, loopInterval);

alert(playMovePoint);

function main() {
  window.addEventListener("devicemotion", (dat) => {
    aX[0] = dat.accelerationIncludingGravity.x;
    aY[0] = dat.accelerationIncludingGravity.y;
    aZ[0] = dat.accelerationIncludingGravity.z;
  });

  sleep(100);

  window.addEventListener("devicemotion", (dat) => {
    aX[1] = dat.accelerationIncludingGravity.x;
    aY[1] = dat.accelerationIncludingGravity.y;
    aZ[1] = dat.accelerationIncludingGravity.z;
  });

  playMovePoint += /*abs*/(aX[1] - aX[0]);
  playMovePoint += /*abs*/(aY[1] - aY[0]);
  playMovePoint += /*abs*/(aZ[1] - aZ[0]);
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
