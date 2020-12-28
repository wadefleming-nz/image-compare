import React from 'react';
import { ImageComparison } from './ImageComparison';
import { ImageFileInput } from './ImageFileInput';

export class ImageComparer extends React.Component {
  render() {
    return (
      <div>
        <ImageFileInput />
        <ImageComparison />
      </div>
    );
  }
}
