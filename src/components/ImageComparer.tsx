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
  filename: '',
  url: whitePlaceHolder,
};

export function ImageComparer() {
  const [beforeImage, setBeforeImage] = useState(defaultImageState);
  const [afterImage, setAfterImage] = useState(defaultImageState);
  const [sliderKey, setSliderKey] = useState(randomString());

  function revokeObjectUrl(url: string) {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }

  function changeBeforeImage(image: { filename: string; url: string }) {
    revokeObjectUrl(beforeImage.url);
    setBeforeImage({
      ...image,
    });
  }

  function changeAfterImage(image: { filename: string; url: string }) {
    revokeObjectUrl(afterImage.url);
    setAfterImage({
      ...image,
    });
  }

  function getImageProperties(file: File) {
    const filename = file ? file.name : '';
    const url = file ? URL.createObjectURL(file) : whitePlaceHolder;
    return { filename, url };
  }

  const handleBeforeFileSelected = (file: File) => {
    changeBeforeImage(getImageProperties(file));
  };

  const handleAfterFileSelected = (file: File) => {
    changeAfterImage(getImageProperties(file));
  };

  const handleReset = () => {
    setBeforeImage(defaultImageState);
    setAfterImage(defaultImageState);
    setSliderKey(randomString()); // force slider control to remount/reset
  };

  const handleShowDemo = (beforeImageUrl: string, afterImageUrl: string) => {
    changeBeforeImage({ filename: '', url: beforeImageUrl });
    changeAfterImage({ filename: '', url: afterImageUrl });
  };

  return (
    <div>
      <div className={styles.container}>
        <ImageFileInput
          label="Before"
          fileName={beforeImage.filename}
          onFileSelected={handleBeforeFileSelected}
        />

        <ImageFileInput
          label="After"
          fileName={afterImage.filename}
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
          sliderKey={sliderKey}
          beforeSrc={beforeImage.url}
          afterSrc={afterImage.url}
        />
      </div>
    </div>
  );
}
