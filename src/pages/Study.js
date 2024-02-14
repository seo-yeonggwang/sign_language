import React, {useRef} from 'react';

const getWebcam = (callback) => {
  try {
    const constraints = {
      'video': true,
      'audio': false
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(callback);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const Styles = {
  Video: { width: "60%", height: "60%", background: 'rgba(245, 240, 215, 0.5)' },
  None: { display: 'none' },
}

function Study() {
  // const [playing, setPlaying] = React.useState(undefined);

  // const videoRef = React.useRef(null);
  
  // React.useEffect(() => {
  //   getWebcam((stream => {
  //     setPlaying(true);
  //     videoRef.current.srcObject = stream;
  //   }));
  // }, []);

  // const startOrStop = () => {
  //   if (playing) {
  //     const s = videoRef.current.srcObject;
  //     s.getTracks().forEach((track) => {
  //       track.stop();
  //     });
  //   } else {
  //     getWebcam((stream => {
  //       setPlaying(true);
  //       videoRef.current.srcObject = stream;
  //     }));
  //   }
  //   setPlaying(!playing);
  // }

  return (
    <div>
        <h1>학습 페이지</h1>
        <div style={{ width: '100vw', height: '100vh', padding: '3em' }}>
          {/* <video ref={videoRef} autoPlay style={Styles.Video} />
          <button color="warning" onClick={() => startOrStop()}>{playing ? 'Stop' : 'Start'} </button> */}
        </div >

    </div>
  );


}

export default Study;

