import { Button } from '@material-ui/core';
import React from 'react';
import './ResetImages.css';

type ResetImagesProps = {
  onReset: () => void;
};

export class ResetImages extends React.Component<ResetImagesProps> {
  handleClick = () => this.props.onReset();

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Reset
      </Button>
    );
  }
}
