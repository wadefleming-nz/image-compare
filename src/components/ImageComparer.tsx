import React from 'react';
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

type ImageComparerState = typeof defaultState;

export class ImageComparer extends React.Component<{}, ImageComparerState> {
  constructor(props: never) {
    super(props);
    this.state = defaultState;
  }

  revokeObjectUrl(url: string) {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }

  setBeforeImage(image: { filename: string; imageUrl: string }) {
    this.revokeObjectUrl(this.state.beforeImageUrl);
    this.setState({
      beforeImageFilename: image.filename,
      beforeImageUrl: image.imageUrl,
    });
  }

  setAfterImage(image: { filename: string; imageUrl: string }) {
    this.revokeObjectUrl(this.state.afterImageUrl);
    this.setState({
      afterImageFilename: image.filename,
      afterImageUrl: image.imageUrl,
    });
  }

  getImageProperties(file: File) {
    const filename = file ? file.name : '';
    const imageUrl = file ? URL.createObjectURL(file) : whitePlaceHolder;
    return { filename, imageUrl };
  }

  handleBeforeFileSelected = (file: File) => {
    this.setBeforeImage(this.getImageProperties(file));
  };

  handleAfterFileSelected = (file: File) => {
    this.setAfterImage(this.getImageProperties(file));
  };

  handleReset = () => {
    this.setState({
      ...defaultImageState, // clear the images
      sliderKey: randomString(), // force slider control to remount/reset
    });
  };

  handleShowDemo = (beforeImageUrl: string, afterImageUrl: string) => {
    this.setBeforeImage({ filename: '', imageUrl: beforeImageUrl });
    this.setAfterImage({ filename: '', imageUrl: afterImageUrl });
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <ImageFileInput
            label="Before"
            fileName={this.state.beforeImageFilename}
            onFileSelected={this.handleBeforeFileSelected}
          />

          <ImageFileInput
            label="After"
            fileName={this.state.afterImageFilename}
            onFileSelected={this.handleAfterFileSelected}
          />
          <div className={styles.controls}>
            <Action
              label="Reset"
              icon={RotateLeftIcon}
              color="secondary"
              onClick={this.handleReset}
            />
            <Action
              label="Demo 1"
              onClick={() => this.handleShowDemo(demo1Before, demo1After)}
            />
            <Action
              label="Demo 2"
              onClick={() => this.handleShowDemo(demo2Before, demo2After)}
            />
          </div>
        </div>
        <div className={styles.imageComparison}>
          <ImageComparison
            sliderKey={this.state.sliderKey}
            beforeSrc={this.state.beforeImageUrl}
            afterSrc={this.state.afterImageUrl}
          />
        </div>
      </div>
    );
  }
}
