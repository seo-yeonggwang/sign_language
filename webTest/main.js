function camInit(stream) {
    var cameraView = document.getElementById("cameraview");
    cameraView.srcObject = stream;
    cameraView.play();
    /////
    // var canvas = document.getElementById("canvas"); // 캔버스 엘리먼트 가져오기
    // var context = canvas.getContext("2d");
    // setInterval(function() {
    //     context.drawImage(cameraView, 0, 0, canvas.width, canvas.height);
    //     // 캔버스에서 이미지 데이터를 가져오고 싶다면 context.getImageData()를 사용할 수 있음
    // }, 100); // 매 100ms(0.1초)마다 실행, 이 값을 조절하여 원하는 간격으로 이미지를 얻어올 수 있음
    /////
}
function camInitFailed(error) {
    console.log("get camera permission failed : ", error)
}

// Main init

function mainInit() {
    // Check navigator media device available
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia )
    {
        // Navigator mediaDevices not supported
        alert("Media Device not supported")
        return;
    }

    navigator.mediaDevices.getUserMedia({video:true})
        .then(camInit)
        .catch(camInitFailed);

}
