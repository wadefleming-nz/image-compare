import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';

export class ImageComparer extends React.Component {
  state = {
    beforeImageFilename: '',
    afterImageFilename: '',
  };

  onBeforeFileSelected = (filename: string | undefined) =>
    this.setState({ beforeImageFilename: filename });
  onAfterFileSelected = (filename: string | undefined) =>
    this.setState({ afterImageFilename: filename });

  render() {
    return (
      <div>
        <ImageFileInput onFileSelected={this.onBeforeFileSelected} />
        <ImageFileInput onFileSelected={this.onAfterFileSelected} />
        <ImageComparison />
      </div>
    );
  }
}
