
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { HeaderGutter } from './HeaderGutter';
import { mq } from '../helpers/media';

export const Header = props => {
  return (
    <header
      css={mq({
        alignItems: 'center',
        background: props.background,
        display: 'flex',
        paddingLeft: HeaderGutter,
        paddingRight: HeaderGutter,
      })}
      {...props}
    />
  );
};