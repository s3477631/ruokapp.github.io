let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
    document.getElementById("xaxe").innerHTML = accelerometer.x
    document.getElementById("yaxe").innerHTML = accelerometer.y
    document.getElementById("zaxe").innerHTML = accelerometer.z
//   console.log("Acceleration along the X-axis " + accelerometer.x);
//   console.log("Acceleration along the Y-axis " + accelerometer.y);
//   console.log("Acceleration along the Z-axis " + accelerometer.z);
});
accelerometer.start();