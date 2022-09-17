import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Section">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 r-2" key={index}>
                <a href={photo.src.original} target="_blanc">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid gallery"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
