import React from 'react';
import { Button, PropTypes, SvgIconProps } from '@material-ui/core';

type ActionProps = {
  label: string;
  onClick: () => void;
  icon?: React.ComponentType<SvgIconProps>;
  color?: PropTypes.Color;
};

export const Action = ({
  label,
  onClick,
  icon = null,
  color = 'primary',
}: ActionProps) => {
  const handleClick = () => onClick();

  const Icon = icon;

  return (
    <Button variant="contained" color={color} onClick={handleClick}>
      {Icon && <Icon />}
      {label}
    </Button>
  );
};
