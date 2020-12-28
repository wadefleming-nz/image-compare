import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';

type ImageComparerState = {
  beforeImageFile: File | undefined;
  afterImageFile: File | undefined;
};

export class ImageComparer extends React.Component<{}, ImageComparerState> {
  constructor(props: never) {
    super(props);
    this.state = {
      beforeImageFile: undefined,
      afterImageFile: undefined,
    };
  }

  onBeforeFileSelected = (file: File | undefined) =>
    this.setState({ beforeImageFile: file });
  onAfterFileSelected = (file: File | undefined) =>
    this.setState({ afterImageFile: file });

  render() {
    return (
      <div>
        <ImageFileInput onFileSelected={this.onBeforeFileSelected} />
        <ImageFileInput onFileSelected={this.onAfterFileSelected} />
        {this.state.beforeImageFile ? (
          <ImageComparison
            src={URL.createObjectURL(this.state.beforeImageFile)}
          />
        ) : (
          <div>Please select files</div>
        )}
      </div>
    );
  }
}
