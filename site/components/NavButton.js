/** @jsx jsx */
import { jsx } from '@emotion/core';

import { NavLink } from './NavLink';

export const NavButton = props => {
  return <NavLink {...props} />;
};
