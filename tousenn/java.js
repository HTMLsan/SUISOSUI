function play_se(){
    // SEとバイブレーションの制御
    var sound = new Audio('sound.mp3');
    sound.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
  }


$(function(){
    //サウンド
    $('#test').click(play_se);
}

$(function(){
    //ブラウザバック禁止
    history.pushState(null, null, null);
    $(window).on("popstate", function(e){
      if (!e.originalEvent.state){
        play_se();
        history.pushState(null, null, null);
        return;
      }
    });