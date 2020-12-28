import React from 'react';
import './ImageFileInput.css';

type ImageFileInputProps = {
  onFileSelected: (filename: string | undefined) => void;
};

export class ImageFileInput extends React.Component<ImageFileInputProps> {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChanged = () => {
    this.props.onFileSelected(this.fileInput.current?.value);
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
