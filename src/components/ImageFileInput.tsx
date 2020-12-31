import React, { ChangeEvent } from 'react';
import styles from './ImageFileInput.module.css';
import { Button, TextField } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

type ImageFileInputProps = {
  label: string;
  fileName: string;
  onFileSelected: (file: File) => void;
};

export class ImageFileInput extends React.Component<ImageFileInputProps> {
  fileInput = React.createRef<HTMLInputElement>();

  handleFileChanged = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onFileSelected(this.fileInput.current?.files?.[0]);
    e.target.value = null; // reset the input so that onChange still fires if the same file is selected following a reset
  };

  render() {
    return (
      <div className={styles.container}>
        <TextField
          className={styles.textField}
          disabled
          variant="outlined"
          label={this.props.label}
          value={this.props.fileName}
        ></TextField>
        <label className={styles.label}>
          <input
            hidden
            type="file"
            accept="image/*"
            ref={this.fileInput}
            onChange={this.handleFileChanged}
          ></input>
          <Button variant="contained" color="secondary" component="span">
            <AddAPhotoIcon />
            Upload
          </Button>
        </label>
      </div>
    );
  }
}
