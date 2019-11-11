
import { HeaderGutter } from './HeaderGutter';
export const Header = props => {
  return (
    <header
      css={props.mq({
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