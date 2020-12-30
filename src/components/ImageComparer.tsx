import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';
import { ResetImages } from './ResetImages';
import whitePlaceHolder from '../assets/white-placeholder.png';

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

  setBeforeImage(file: File) {
    this.revokeObjectUrl(this.state.beforeImageUrl);
    this.setState({
      beforeImageFilename: file ? file.name : '',
      beforeImageUrl: file ? URL.createObjectURL(file) : whitePlaceHolder,
    });
  }

  setAfterImage(file: File) {
    this.revokeObjectUrl(this.state.afterImageUrl);
    this.setState({
      afterImageFilename: file ? file.name : '',
      afterImageUrl: file ? URL.createObjectURL(file) : whitePlaceHolder,
    });
  }

  handleBeforeFileSelected = (file: File) => {
    this.setBeforeImage(file);
  };

  handleAfterFileSelected = (file: File) => {
    this.setAfterImage(file);
  };

  handleResetImages = () => {
    this.setState(defaultState);
  };

  render() {
    const { beforeImageUrl, afterImageUrl } = this.state;

    return (
      <div>
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
        <ResetImages onReset={this.handleResetImages} />
        <ImageComparison beforeSrc={beforeImageUrl} afterSrc={afterImageUrl} />
      </div>
    );
  }
}
