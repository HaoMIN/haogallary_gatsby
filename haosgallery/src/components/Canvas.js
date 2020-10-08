import React from "react"
import Gallery from "react-grid-gallery"

const Canvas = (props) => {
  let photoArrary = [];

  function imagesMap(aImages) {   
    aImages.forEach(pic => {
      let photo = {
        src: pic,
        thumbnail: pic,
        thumbnailWidth: 200,
        thumbnailHeight: 180
      }
      photoArrary.push(photo);
    });
    return photoArrary;
  }

  return <Gallery images={imagesMap(props.album)}/>
}

export default Canvas