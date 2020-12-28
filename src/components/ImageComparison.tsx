import React from 'react';
import beforeImage from '../assets/example-image-before.jpg';

export class ImageComparison extends React.Component {
  render() {
    return <img src={beforeImage} alt="Image for Comparison" />;
  }
}
