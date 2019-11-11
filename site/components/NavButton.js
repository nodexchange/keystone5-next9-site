import { NavLink } from './NavLink';

export const NavButton = props => (
  <NavLink
    css={props.mq({
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
