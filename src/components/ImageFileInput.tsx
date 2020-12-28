import React from 'react';
import './ImageFileInput.css';

type ImageFileInputProps = {
  onFileSelected: (file: File | undefined) => void;
};

export class ImageFileInput extends React.Component<ImageFileInputProps> {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChanged = () => {
    this.props.onFileSelected(this.fileInput.current?.files?.[0]);
  };

  render() {
    return (
      <label>
        Filename
        <input
          type="file"
          accept="image/*"
          ref={this.fileInput}
          onChange={this.handleFileChanged}
        ></input>
      </label>
    );
  }
}
