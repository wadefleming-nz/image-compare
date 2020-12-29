import React from 'react';
import './ImageFileInput.css';
import { Button } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

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
          hidden
          type="file"
          accept="image/*"
          ref={this.fileInput}
          onChange={this.handleFileChanged}
        ></input>
        <Button variant="contained" color="secondary" component="span">
          <AddAPhotoIcon className="icon" />
          Upload
        </Button>
      </label>
    );
  }
}
