
var userPlay = false;
var currentTime = 0;
var currentMinute = 0;

const url = 'https://pay.kaiserfitapp.com/apiv2/index.php';
const hashVal  = [...crypto.getRandomValues(new Uint8Array(8))]
      .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
      const timeStamp = Date.now();   
const vsl_id = hashVal+'-'+timeStamp;



const player = videojs('my-video', {
    "playbackRates": [0.75, 1, 1.25, 1.5],
    "controls": true,
    fluid: true,
    autoplay: false,
    plugins: { eventTracking: true }
} );


player.on('tracking:firstplay', (e, data) => {
  userPlay = true;
  setInterval(() => {
    videoTrack()
  }, 1000);

});
player.on('play', function(){
  clearInterval(videoTrack);
  setInterval(() => {
    videoTrack()
  }, 1000);
})

player.on('tracking:pause', (e, data) => console.log(data));

player.on('tracking:seek', function(e, data) {
  
  var x = Math.floor(player.currentTime()/60);
  currentMinute = x;
  console.log(currentMinute)
  
});


function videoTrack(){

    currentTime = player.currentTime();
    // var secondsWatched =  player.duration() - currentTime ;
     var x = Math.floor(currentTime/60);
    if (x>0 && x>currentMinute){
      currentMinute = x;
      // console.table("minutes watched: "+x, "Time watched in seconds: "+ currentTime, "Total time remaining: "+ secondsWatched);
          $.ajax({
          type: "POST",
          url: url,
          data: {id: vsl_id, a: 2, m : x},
          dataType: 'json',
         
        });
    }
  
}





$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: url,
    data: {id: vsl_id, a: 1},
    dataType: 'json',
    success: function(data){
      console.log(data)
    },
  });

})