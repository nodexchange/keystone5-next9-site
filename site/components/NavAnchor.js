/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, createContext } from 'react';

import { mq } from '../helpers/media';
import { fontSizes, gridSize } from '../theme';
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

export const NavAnchor = props => {
  // const { foreground } = useTheme();
  const paddingHorizontal = [gridSize, gridSize, gridSize * 3];
  const paddingVertical = gridSize;

  return (
    <a
      css={mq({
        color: 'white',
        display: 'inline-block',
        fontSize: fontSizes.sm,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingBottom: paddingVertical,
        paddingTop: paddingVertical,
        textDecoration: 'none',

        ':hover': {
          textDecoration: 'underline'
        }
      })}
      {...props}
    />
  );
};
