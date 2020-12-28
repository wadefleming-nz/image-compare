import React from 'react';
import './ImageComparison.css';

type ImageComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
};

export class ImageComparison extends React.Component<ImageComparisonProps> {
  render() {
    return (
      <div>
        <img src={this.props.beforeSrc} alt="Before" />
        <img src={this.props.afterSrc} alt="After" />
      </div>
    );
  }
}
