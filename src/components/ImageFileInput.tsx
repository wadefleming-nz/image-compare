import React, { ChangeEvent, useRef } from 'react';
import styles from './ImageFileInput.module.css';
import { Button, TextField } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

type ImageFileInputProps = {
  label: string;
  fileName: string;
  onFileSelected: (file: File) => void;
};

export function ImageFileInput(props: ImageFileInputProps) {
  const fileInput = useRef<HTMLInputElement>();

  const handleFileChanged = (e: ChangeEvent<HTMLInputElement>) => {
    props.onFileSelected(fileInput.current?.files?.[0]);
    e.target.value = null; // reset the input so that onChange still fires if the same file is selected following a reset
  };

  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
        disabled
        variant="outlined"
        label={props.label}
        value={props.fileName}
      ></TextField>
      <label className={styles.label}>
        <input
          hidden
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleFileChanged}
        ></input>
        <Button variant="contained" color="secondary" component="span">
          <AddAPhotoIcon />
          Upload
        </Button>
      </label>
    </div>
  );
}
