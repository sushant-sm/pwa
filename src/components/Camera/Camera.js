import React from 'react';
import { IconButton } from '@material-ui/core';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import './Camera.css';

function Camera({ onCapture, onDelete, source, imageRotation }) {
  return (
    <div className="camera-box">
      {source && (
        <div className="image-box">
          <img
            src={source}
            alt="snap"
            className="camera-img"
            style={{ transform: `rotate(${imageRotation}deg)` }}
          />
          <IconButton
            color="secondary"
            component="span"
            className="delete-button"
            onClick={onDelete}
          >
            <DeleteOutlineRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      )}
      <input
        accept="image/*"
        type="file"
        capture="environment"
        onChange={onCapture}
        id="icon-button-file"
        style={{ display: "none" }}
      />
      {!source && (
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            component="span"
            className="capture-button"
          >
            <PhotoCameraRoundedIcon fontSize="large" />
          </IconButton>
        </label>
      )}
    </div>
  );
}

export default Camera;
