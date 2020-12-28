import React from 'react';
import './ImageFileInput.css';

export class ImageFileInput extends React.Component {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChanged = () => {
    console.log(this.fileInput.current?.value);
  };

  render() {
    return (
      <label>
        Filename
        <input
          type="file"
          ref={this.fileInput}
          onChange={this.handleFileChanged}
        ></input>
      </label>
    );
  }
}
