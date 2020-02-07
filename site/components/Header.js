/** @jsx jsx */
import { jsx } from '@emotion/core';

import { HeaderGutter } from './HeaderGutter';
import { mq } from '../helpers/media';

export const Header = props => {
  return (
    <header
      css={mq({
        position: 'fixed',
        zIndex: 2000,
        width: '100%'
      })}
      {...props}
    />
  );
};
