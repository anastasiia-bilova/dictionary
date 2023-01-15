import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos.length !== 0) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                  <a
                    href={photo.src.landscape}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt="Keyword illustration"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
