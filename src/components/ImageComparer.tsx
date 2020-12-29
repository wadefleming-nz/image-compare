import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';
import { ResetImages } from './ResetImages';
import whitePlaceHolder from '../assets/white-placeholder.png';

type ImageComparerState = {
  beforeImageUrl: string;
  afterImageUrl: string;
};

export class ImageComparer extends React.Component<{}, ImageComparerState> {
  constructor(props: never) {
    super(props);
    this.state = {
      beforeImageUrl: whitePlaceHolder,
      afterImageUrl: whitePlaceHolder,
    };
  }

  revokeObjectUrl(url: string) {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }

  setBeforeImageUrl(file: File) {
    this.revokeObjectUrl(this.state.beforeImageUrl);
    this.setState({
      beforeImageUrl: file ? URL.createObjectURL(file) : whitePlaceHolder,
    });
  }

  setAfterImageUrl(file: File) {
    this.revokeObjectUrl(this.state.afterImageUrl);
    this.setState({
      afterImageUrl: file ? URL.createObjectURL(file) : whitePlaceHolder,
    });
  }

  handleBeforeFileSelected = (file: File) => {
    this.setBeforeImageUrl(file);
  };

  handleAfterFileSelected = (file: File) => {
    this.setAfterImageUrl(file);
  };

  handleResetImages = () => {
    this.setBeforeImageUrl(null);
    this.setAfterImageUrl(null);
  };

  render() {
    const { beforeImageUrl, afterImageUrl } = this.state;

    return (
      <div>
        <ImageFileInput
          label="Before"
          onFileSelected={this.handleBeforeFileSelected}
        />
        <ImageFileInput
          label="After"
          onFileSelected={this.handleAfterFileSelected}
        />
        <ResetImages onReset={this.handleResetImages} />
        <ImageComparison beforeSrc={beforeImageUrl} afterSrc={afterImageUrl} />
      </div>
    );
  }
}
