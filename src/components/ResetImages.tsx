import React from 'react';
import './ResetImages.css';

type ResetImagesProps = {
  onReset: () => void;
};

export class ResetImages extends React.Component<ResetImagesProps> {
  handleClick = () => this.props.onReset();

  render() {
    return <button onClick={this.handleClick}>Reset</button>;
  }
}
