/** @jsx jsx */
import { jsx } from '@emotion/core';

import { mq } from '../helpers/media';

export const NavAnchor = props => {
  const { className, foreground, gridSize, fontSizes } = props;
  const paddingHorizontal = [gridSize / 3, gridSize / 2, gridSize * 2, gridSize * 3];
  const paddingVertical = gridSize;
  const slots  = {
    children: props.children,
    href: props.href,
    className: className
  } 

  return (
    <a
      css={mq({
        color: foreground,
        display: 'inline-block',
        fontSize: fontSizes.sm,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingBottom: paddingVertical,
        paddingTop: paddingVertical,
        textDecoration: 'none',

        ':hover': {
          textDecoration: 'underline',
        },
      })}
      {...slots}
    />
  );
};