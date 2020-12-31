import { Button } from '@material-ui/core';
import React from 'react';

type ActionProps = {
  label: string;
  onClick: () => void;
};

export class Action extends React.Component<ActionProps> {
  handleClick = () => this.props.onClick();

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        {this.props.label}
      </Button>
    );
  }
}
