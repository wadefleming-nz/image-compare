import React from 'react';
import './ImageComparer.css';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';
import { ResetImages } from './ResetImages';
import { ShowDemo } from './ShowDemo';
import whitePlaceHolder from '../assets/white-placeholder.png';
import demo1BlackWhite from '../assets/demo1-black-white.jpg';
import demo1Color from '../assets/demo1-color.jpg';

const defaultState = {
  beforeImageFilename: '',
  afterImageFilename: '',
  beforeImageUrl: whitePlaceHolder,
  afterImageUrl: whitePlaceHolder,
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

  handleResetImages = () => {
    this.setState(defaultState);
  };

  handleShowDemo = (beforeImageUrl: string, afterImageUrl: string) => {
    this.setBeforeImage({ filename: '', imageUrl: beforeImageUrl });
    this.setAfterImage({ filename: '', imageUrl: afterImageUrl });
  };

  render() {
    const { beforeImageUrl, afterImageUrl } = this.state;

    return (
      <div>
        <div className="grid-container">
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
          <div className="controls">
            <ResetImages onReset={this.handleResetImages} />
            <ShowDemo
              label="Demo 1"
              beforeImageUrl={demo1BlackWhite}
              afterImageUrl={demo1Color}
              onShow={() => this.handleShowDemo(demo1BlackWhite, demo1Color)}
            />
          </div>
        </div>
        <div className="image-container">
          <ImageComparison
            beforeSrc={beforeImageUrl}
            afterSrc={afterImageUrl}
          />
        </div>
      </div>
    );
  }
}
