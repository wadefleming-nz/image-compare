import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import './ImageComparison.css';

type ImageComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
};

export class ImageComparison extends React.Component<ImageComparisonProps> {
  render() {
    return (
      <div className="container">
        <ImageSlider
          image1={this.props.afterSrc} // slider lib puts image1 on the right
          image2={this.props.beforeSrc} // and image2 on the left
        />
      </div>
    );
  }
}
