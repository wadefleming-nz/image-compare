import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';

type ImageComparerState = {
  beforeImageUrl: string;
  afterImageUrl: string;
};

export class ImageComparer extends React.Component<{}, ImageComparerState> {
  constructor(props: never) {
    super(props);
    this.state = {
      beforeImageUrl: '',
      afterImageUrl: '',
    };
  }

  revokeObjectUrl(url: string) {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }

  onBeforeFileSelected = (file: File) => {
    this.revokeObjectUrl(this.state.beforeImageUrl);
    this.setState({ beforeImageUrl: URL.createObjectURL(file) });
  };

  onAfterFileSelected = (file: File) => {
    this.revokeObjectUrl(this.state.afterImageUrl);
    this.setState({ afterImageUrl: URL.createObjectURL(file) });
  };

  render() {
    return (
      <div>
        <ImageFileInput onFileSelected={this.onBeforeFileSelected} />
        <ImageFileInput onFileSelected={this.onAfterFileSelected} />
        {this.state.beforeImageUrl ? (
          <ImageComparison src={this.state.beforeImageUrl} />
        ) : (
          <div>Please select files</div>
        )}
      </div>
    );
  }
}
