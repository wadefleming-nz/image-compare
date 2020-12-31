import { Button, PropTypes } from '@material-ui/core';
import React from 'react';

type ActionProps = {
  label: string;
  color: PropTypes.Color;
  onClick: () => void;
};

export class Action extends React.Component<ActionProps> {
  static defaultProps = { color: 'primary' };

  handleClick = () => this.props.onClick();

  render() {
    return (
      <Button
        variant="contained"
        color={this.props.color}
        onClick={this.handleClick}
      >
        {this.props.label}
      </Button>
    );
  }
}
