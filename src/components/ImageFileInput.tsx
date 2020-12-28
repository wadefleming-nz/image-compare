import React from 'react';
import './ImageFileInput.css';

export class ImageFileInput extends React.Component {
  render() {
    return (
      <div>
        <label>
          Filename
          <input value="Image.jpg"></input>
        </label>
      </div>
    );
  }
}
