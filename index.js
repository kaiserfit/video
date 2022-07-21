
const player = videojs('my-video', {
    "playbackRates": [0.75, 1, 1.25, 1.5],
    "controls": true,
    muted: true,
           
    fluid: true,
    autoplay: true,
    plugins: { eventTracking: true }
} );


pluginConfig = {
    performance: function(data) {
     alert(data);
    }
  }
player.on('tracking:firstplay', (e, data) => console.log(data));


player.on('tracking:pause', (e, data) => console.log(data));

player.on('tracking:seek', (e, data) => console.log(data));

player.on('tracking:performance', (e, data) => console.log(data.totalDuration));

player.on('timeupdate', function() {
    // console.log(this.currentTime());
  });


  player.on('tracking:first-quarter', (e, data) => console.log(data))
player.on('tracking:second-quarter', (e, data) => console.log(data))
player.on('tracking:third-quarter', (e, data) => console.log(data))
player.on('tracking:fourth-quarter', (e, data) => console.log(data))

  $(window).on('beforeunload',function(){
    alert(player.currentTime());
  });
function playplayer() {
    player.play();
    

}

$("#btnPlay").click(function(){
    player.muted(false);
    $(this).hide();
});

function pauseplayer() {
    player.pause();
}

$(".vjs-matrix .vjs-big-play-button").click(function(){
    player.muted(false);
});
$(document).ready(function(){
    
    // $("#btnPlay").trigger("click");
    // player.autoplay('any');
    // player.muted(false);

    // player.play();
    // $(".vjs-matrix .vjs-big-play-button").trigger("click");
})