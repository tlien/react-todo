import React from "react";

const footerStyle = {
  backgroundColor: "black",
  color: "#fff",
  minHeight: "40px",
  padding: "50px 300px 50px 300px",
  display: "flex",
  justifyContent: "space-between"
};

class Footer extends React.Component {
  render() {
    return (
      <footer style={footerStyle}>
        <p>This is a paragraph</p>
        <img
          src="https://via.placeholder.com/100/0000FF/808080 ?Text=Todo-App"
          alt=""
        />
        <p>Test flexbox</p>
      </footer>
    );
  }
}

export default Footer;
