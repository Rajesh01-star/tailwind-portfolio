import React from "react";

const download = () => {
  // using Java Script method to get PDF file
  fetch("resume.jpg").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "resume.jpg";
      alink.click();
    });
  });
};

export default download;
