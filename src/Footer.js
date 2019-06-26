import React, { useState } from "react";

const Footer = props => {
  const [currentPicture, setCurrentPicture] = useState({});

  const getNewPicture = () => {
    var random = Math.floor(Math.random() * 1500) + 1;
    fetch("https://xkcd.now.sh/" + random)
      .then(response => response.json())
      .then(json =>
        setCurrentPicture({ url: json.img, title: json.title, alt: json.alt })
      );
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "slategray",
    color: "#fff"
  };

  return (
    <div>
      <h1>Comic of the day</h1>
      <button style={buttonStyle} onClick={getNewPicture}>
        Refresh
      </button>
      <br />
      <br />
      <img src={currentPicture.url} alt={currentPicture.alt} />
      <div>{currentPicture.title}</div>
    </div>
  );
};

export default Footer;
