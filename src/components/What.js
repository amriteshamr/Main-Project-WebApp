import img1 from "../assets/camera.jpg";
import img2 from "../assets/facerec.jpg";
import "./WhatStyles.css";

const What = () => {
  return (
    <div className="what">
      <h1>Smart Attendance Marker</h1>
      <p>An attempt as part of KTU B.Tech final year project!</p>
      <div className="first-des">
        <div className="des-text">
          <h2>What is SAM ?</h2>
          <p>
            SAM, or Smart attendance Marker is an innovative approach rowards
            attendance marking in educational institutions. SAM aims to
            overthrow the conventional methods of attendance registers and even
            some of the latest biometric methods by implementing the face
            recognition technology. Smarter than ever, isn't it?
          </p>
        </div>
        <div className="image">
          <img alt="pic1" src={img1} />
          <img alt="pic2" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default What;
