let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
    document.getElementById("xaxe").innerText = accelerometer.x
    document.getElementById("yaxe").innerText = accelerometer.y
    document.getElementById("zaxe").innerText = accelerometer.z
//   console.log("Acceleration along the X-axis " + accelerometer.x);
//   console.log("Acceleration along the Y-axis " + accelerometer.y);
//   console.log("Acceleration along the Z-axis " + accelerometer.z);
});
accelerometer.start();

document.getElementById("chuck").addEventListener("touchstart", function(e){
    document.getElementById('zane').innerText = "yay"
});