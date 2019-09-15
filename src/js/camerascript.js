// Grab elements, create settings, etc.
// var video = document.getElementById('video').style.display = "visible";
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// var screenwords = localStorage.getItem("messageinput"); 
// var captures = [];
// var subvisb = document.getElementById("submitbtn").style.visibility = "hidden";

// const mediaSource = new MediaSource();
// const video = document.createElement('video');
// try {
//   video.srcObject = mediaSource;
// } catch (error) {
//   video.src = URL.createObjectURL(mediaSource);
// }

// Get access to the camera!
// const mediaSource = new MediaSource();
// video.srcObject = mediaSource;
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(mediaStream) {
//         //video.src = window.URL.createObjectURL(stream);
//         video.srcObject = mediaStream;
//         video.play();
//     });
// }


// Elements for taking the snapshot

// Trigger photo take

// document.getElementById("photosnapped").addEventListener("click", function() {
//     context.drawImage(video, 0, 0, 640, 480);
//     context.font = "80px Arial";
//     context.fillStyle = "white"
//     context.fillText(screenwords, 150, 400);
//     var imagecap = canvas.toDataURL("image/png")
//     captures.push(imagecap); 
//     document.getElementById("video").style.display = "none";
//     document.getElementById("submitbtn").style.visibility = "visible"; 

// });

//document.getElementById("output").innerHTML = localStorage.getItem("messageinput")

// document.getElementById('opencamera').addEventListener("click", function(e){
//   takePhoto()
// });


// function takePhoto() {
//   imageCapture.takePhoto()
//   .then(function(blob) {
//     console.log('Took photo:', blob);
//     img.classList.remove('hidden');
//     img.src = URL.createObjectURL(blob);
//   })
//   .catch(function(error) {
//     console.log('takePhoto() error: ', error);
//   });
// }

// var constraints;
// var imageCapture;
// var mediaStream;

// var canvas = document.getElementById('canvas');

// var video = document.getElementById('video');

// getStream()

// function getStream() {
//   navigator.mediaDevices.getUserMedia({video: true})
//     .then(gotStream)
//     .catch(error => {
//       console.log('getUserMedia error: ', error);
//     });
// }

// gotStream()
// function gotStream(stream) {
//   console.log('getUserMedia() got stream: ', stream);
//   mediaStream = stream;
//   video.srcObject = stream;
//   imageCapture = new ImageCapture(MediaStream.getVideoTracks());


// }


document.getElementById("photosnapped").addEventListener("click", function(){
    takePhotonow()
  })
 
 
 
 
 var imageCapture;
 var baseyfied = [];
 var imgout = document.getElementById("output").src = baseyfied[0];
 
 
 
 navigator.mediaDevices.getUserMedia({video: true})
 .then(mediaStream => {
   document.querySelector('video').srcObject = mediaStream;
   const track = mediaStream.getVideoTracks()[0];
   imageCapture = new ImageCapture(track);
 })
 
 const img = document.querySelector('img');
 // ...
 let captures = []
 
 function takePhotonow(){
   var version = 0;
   var insertdiv = document.getElementById("inserter")
   imageCapture.takePhoto()
   .then(blob => {
    captures.push(URL.createObjectURL(blob));
    var imageinit = new Image(640, 480);
      version = parseInt(captures.length -1)
     imageinit.src = captures[version]
     imageinit.id = version
     imageinit.style.zIndex = version
     imageinit.style.position = "absolute"
     imageinit.style.top = 0, 
     imageinit.style.left = 0,
     insertdiv.appendChild(imageinit)
     imageinit.onload = () => { URL.revokeObjectURL(this.src); }
   })
   .catch(error => console.error('takePhoto() error:', error));
 }
 var arrindex = [];
 
 var totalobjs = document.getElementsByTagName("img");
 function doSomething(scroll_pos){
  
   arrindex.push(parseInt(scroll_pos))
     // console.log(arrindex)
    if(arrindex[arrindex.length - 1] > arrindex[arrindex.length - 2]){
     //  var currentposition = captures.length
 
   
     var imagedisplayed = document.getElementById(arrindex.length - 1)
     // console.log(parseInt(imagedisplayed.style.zIndex))
         
       imagedisplayed.style.zIndex+= 1
 
        if (arrindex.length == totalobjs.length){
          arrindex = []
          imagedisplayed.style.zIndex = 0
        }
 
        console.log(imagedisplayed.style.zIndex)
 
        console.log("this is the new" + arrindex[arrindex.length - 1] + "this is old" + arrindex[arrindex.length - 2])
    
    }
    else if (arrindex[arrindex.length - 1] < arrindex[arrindex.length - 2]){
     var imagedisplayed = document.getElementById(arrindex.length - 1)
    // console.log(imagedisplayed.style.zIndex-= imagedisplayed.style.zIndex -1)
 
    imagedisplayed.style.zIndex-=  1
    if (imagedisplayed.style.zIndex == 0){
     arrindex = []
     imagedisplayed.style.zIndex = totalobjs.length
   }
 
    }
 
 
 }
 let ticking = false;
 window.addEventListener('scroll', function(e){
   last_known = window.scrollY;
   console.log(window)
 if (!ticking) {
 window.requestAnimationFrame(function() {
   doSomething(last_known);
   ticking = false;
 });
 
 ticking = true;
 }
 });
 
 let accelerometer = new Accelerometer({frequency: 60});
 
 accelerometer.addEventListener('reading', e => {
   console.log("Acceleration along the X-axis " + accelerometer.x);
   console.log("Acceleration along the Y-axis " + accelerometer.y);
   console.log("Acceleration along the Z-axis " + accelerometer.z);
 });
 accelerometer.start();
 
 
 
 
 // append and inject IMG tag into DOM with javascript
 
 
 // const list = document.createElement("ul");
 // fileList.appendChild(list);
 // for (let i = 0; i < files.length; i++) {
 //   const li = document.createElement("li");
 //   list.appendChild(li);
   
 //   const img = document.createElement("img");
 //   img.src = window.URL.createObjectURL(files[i]);
 //   img.height = 60;
 //   img.onload = function() {
 //     window.URL.revokeObjectURL(this.src);
 //   }
 //   li.appendChild(img);
 //   const info = document.createElement("span");
 //   info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
 //   li.appendChild(info);
 // }
 // }