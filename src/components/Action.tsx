import React from 'react';
import { Button, PropTypes, SvgIconProps } from '@material-ui/core';

type ActionProps = {
  label: string;
  icon: React.ComponentType<SvgIconProps>;
  color: PropTypes.Color;
  onClick: () => void;
};

export class Action extends React.Component<ActionProps> {
  static defaultProps = {
    color: 'primary',
    icon: null as React.ComponentType<SvgIconProps>,
  };

  handleClick = () => this.props.onClick();

  render() {
    const Icon = this.props.icon;

    return (
      <Button
        variant="contained"
        color={this.props.color}
        onClick={this.handleClick}
      >
        {Icon && <Icon />}
        {this.props.label}
      </Button>
    );
  }
}
