import { Button } from '@material-ui/core';
import React from 'react';
import './ResetImages.css';

type ShowDemoProps = {
  label: string;
  beforeImageFilename: string;
  afterImageFilename: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  onShow: () => void;
};

export class ShowDemo extends React.Component<ShowDemoProps> {
  handleClick = () => this.props.onShow();

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        {this.props.label}
      </Button>
    );
  }
}