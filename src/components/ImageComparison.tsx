import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import './ImageComparison.css';

type ImageComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
};

export class ImageComparison extends React.Component<ImageComparisonProps> {
  render() {
    const offWhite = 'rgb(240,240,240)';
    const greyTransparent = 'rgba(180, 180, 180, 0.5)';

    return (
      <div className="container">
        <ImageSlider
          image1={this.props.afterSrc} // slider lib puts image1 on the right
          image2={this.props.beforeSrc} // and image2 on the left
          sliderWidth={1}
          sliderColor={offWhite}
          handleBackgroundColor={greyTransparent}
          handleColor={'white'}
        />
      </div>
    );
  }
}
