import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import './ImageComparison.css';

type ImageComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
};

export class ImageComparison extends React.Component<ImageComparisonProps> {
  render() {
    const lightGrey = 'rgb(217,217,217)';
    const greyTransparent = 'rgba(180, 180, 180, 0.5)';

    const style = {
      sliderWidth: 1,
      sliderColor: lightGrey,
      handleBackgroundColor: greyTransparent,
      handleColor: 'white',
    };

    return (
      <div className="image-comparison-container">
        <ImageSlider
          image1={this.props.afterSrc} // slider lib puts image1 on the right
          image2={this.props.beforeSrc} // and image2 on the left
          {...style}
        />
      </div>
    );
  }
}
