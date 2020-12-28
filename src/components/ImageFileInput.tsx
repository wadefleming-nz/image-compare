import React from 'react';
import './ImageFileInput.css';

type ImageFileInputProps = {
  label: string;
  onFileSelected: (file: File) => void;
};

export class ImageFileInput extends React.Component<ImageFileInputProps> {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChanged = () => {
    this.props.onFileSelected(this.fileInput.current?.files?.[0]);
  };

  render() {
    return (
      <label>
        {this.props.label}
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
