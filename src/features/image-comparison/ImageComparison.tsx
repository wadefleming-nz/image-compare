import React from 'react';
import styles from './ImageComparison.module.css';
import ImageSlider from 'react-image-comparison-slider';

type ImageComparisonProps = {
  sliderKey: string;
  beforeSrc: string;
  afterSrc: string;
};

export function ImageComparison({
  sliderKey,
  beforeSrc,
  afterSrc,
}: ImageComparisonProps) {
  const lightGrey = 'rgb(217,217,217)';
  const greyTransparent = 'rgba(180, 180, 180, 0.5)';

  const style = {
    sliderWidth: 1,
    sliderColor: lightGrey,
    handleBackgroundColor: greyTransparent,
    handleColor: 'white',
  };

  return (
    <div className={styles.container} key={sliderKey}>
      <ImageSlider
        image1={afterSrc} // slider lib puts image1 on the right
        image2={beforeSrc} // and image2 on the left
        {...style}
      />
    </div>
  );
}
