import React, { useState } from 'react';
import styles from './ImageComparer.module.css';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';
import { Action } from './Action';
import whitePlaceHolder from '../assets/white-placeholder.png';
import demo1Before from '../assets/demo1-before.jpg';
import demo1After from '../assets/demo1-after.jpg';
import demo2Before from '../assets/demo2-before.jpg';
import demo2After from '../assets/demo2-after.jpg';
import { randomString } from '../utils/random-string';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const defaultImageState = {
  beforeImageFilename: '',
  afterImageFilename: '',
  beforeImageUrl: whitePlaceHolder,
  afterImageUrl: whitePlaceHolder,
};

const defaultState = {
  ...defaultImageState,
  sliderKey: randomString(),
};

export function ImageComparer() {
  const [state, setState] = useState(defaultState);

  function revokeObjectUrl(url: string) {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }

  function setBeforeImage(image: { filename: string; imageUrl: string }) {
    revokeObjectUrl(state.beforeImageUrl);
    setState((prevState) => ({
      ...prevState,
      beforeImageFilename: image.filename,
      beforeImageUrl: image.imageUrl,
    }));
  }

  function setAfterImage(image: { filename: string; imageUrl: string }) {
    revokeObjectUrl(state.afterImageUrl);
    setState((prevState) => ({
      ...prevState,
      afterImageFilename: image.filename,
      afterImageUrl: image.imageUrl,
    }));
  }

  function getImageProperties(file: File) {
    const filename = file ? file.name : '';
    const imageUrl = file ? URL.createObjectURL(file) : whitePlaceHolder;
    return { filename, imageUrl };
  }

  const handleBeforeFileSelected = (file: File) => {
    setBeforeImage(getImageProperties(file));
  };

  const handleAfterFileSelected = (file: File) => {
    setAfterImage(getImageProperties(file));
  };

  const handleReset = () => {
    setState({
      ...defaultImageState, // clear the images
      sliderKey: randomString(), // force slider control to remount/reset
    });
  };

  const handleShowDemo = (beforeImageUrl: string, afterImageUrl: string) => {
    setBeforeImage({ filename: '', imageUrl: beforeImageUrl });
    setAfterImage({ filename: '', imageUrl: afterImageUrl });
  };

  return (
    <div>
      <div className={styles.container}>
        <ImageFileInput
          label="Before"
          fileName={state.beforeImageFilename}
          onFileSelected={handleBeforeFileSelected}
        />

        <ImageFileInput
          label="After"
          fileName={state.afterImageFilename}
          onFileSelected={handleAfterFileSelected}
        />
        <div className={styles.controls}>
          <Action
            label="Reset"
            icon={RotateLeftIcon}
            color="secondary"
            onClick={handleReset}
          />
          <Action
            label="Demo 1"
            onClick={() => handleShowDemo(demo1Before, demo1After)}
          />
          <Action
            label="Demo 2"
            onClick={() => handleShowDemo(demo2Before, demo2After)}
          />
        </div>
      </div>
      <div className={styles.imageComparison}>
        <ImageComparison
          sliderKey={state.sliderKey}
          beforeSrc={state.beforeImageUrl}
          afterSrc={state.afterImageUrl}
        />
      </div>
    </div>
  );
}
