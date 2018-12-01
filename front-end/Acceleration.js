var playMovePoint = 0.0;

function loopFunc() {
  // ループする処理
  main();
}
function lastFunc() {
  // ループの終わりに実行する処理
  alert('マジ' + playMovePoint + playMovePoint);
  alert('ぎん' + playMovePoint);
}
var loopTimes = 10; // ループする回数
var loopInterval = 1000; // ループする間隔(ミリ秒)

var count = 0;
var countup = function(){
  console.log(count++);
}

var loop = setInterval(function(){
  loopFunc();
  countup();
  if(count >= loopTimes){
    lastFunc();
    clearInterval(loop);
  }
}, loopInterval);

function sleep(waitMsec) {
  var startMsec = new Date();

  while (new Date() - startMsec < waitMsec);
}

function main() {
  var aX1, aX2;
  var aY1, aY2;
  var aZ1, aZ2;
  //最初の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    playMovePoint += dat.accelerationIncludingGravity.x;
    playMovePoint += dat.accelerationIncludingGravity.y;
    playMovePoint += dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x + ", " + aX1);
    document.write(dat.accelerationIncludingGravity.y + ", " + aY1);
    document.write(dat.accelerationIncludingGravity.z + ", " + aZ1);
  });

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    playMovePoint += dat.accelerationIncludingGravity.x;
    playMovePoint += dat.accelerationIncludingGravity.y;
    playMovePoint += dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x + ", " + aX2);
    document.write(dat.accelerationIncludingGravity.y + ", " + aY2);
    document.write(dat.accelerationIncludingGravity.z + ", " + aZ2);
  });

  //playMovePointに最初と0.1秒後の加速度の絶対値を代入

  //document.write(aX[1] + ", " + aX[0]);
  //document.write(aY[1] + ", " + aY[0]);
  //document.write(aZ[1] + ", " + aZ[0]);
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
