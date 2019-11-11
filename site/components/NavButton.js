/** @jsx jsx */
import { jsx } from '@emotion/core';

import { NavLink } from './NavLink';
import { mq } from '../helpers/media';

export const NavButton = props => (
  // console.log(prop.themeColor)
  <NavLink
    css={mq({
      backgroundColor: props.themeColor,
      border: 'none',
      borderRadius: 40,
      color: props.foregroundThemeColor,
      fontWeight: 600,
      lineHeight: 1,
      marginRight: [0, 0],
      padding: '.9rem 2rem',
    })}
    {...props}
  />
);
