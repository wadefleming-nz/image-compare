import React from 'react';
import './ImageComparison.css';

type ImageComparisonProps = {
  src: string;
};

export class ImageComparison extends React.Component<ImageComparisonProps> {
  render() {
    return <img src={this.props.src} alt="Image for Comparison" />;
  }
}
