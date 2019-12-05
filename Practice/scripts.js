var windowWidth;
var windowHeight;
var totalFish = 10;

window.onload = function(){
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  for(var i=0;i<totalFish;i++){
      var topPos = randNum(windowHeight);
      var leftPos = randNum(windowWidth);
      var fish = $('<img class="fish" src="images/fish.png">');

      $(fish).css('top', topPos + 'px');
      $(fish).css('left', topPos + 'px');

      $('body').append(fish);
  }
  moveFish();
}


function randNum(value){
  var number = Math.random()*value;
  number = Math.floor(number);
  return number;
}
