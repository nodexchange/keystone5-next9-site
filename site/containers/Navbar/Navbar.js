/** @jsx jsx */

import { useContext, createContext } from 'react';
import getConfig from 'next/config';
import { jsx } from '@emotion/core';

import Link from 'next/link';
import { useAuth } from '../../lib/authetication';
import { SignoutIcon } from '../../primitives';
import { getForegroundColor, useLogoDimension } from '../../helpers';
import { mq } from '../../helpers/media';
import { gridSize, fontSizes } from '../../theme';
import AuthModal from '../../components/auth/modal';
import { Header, HeaderGutter, NavAnchor, NavButton, NavLink } from '../../components';

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const { publicRuntimeConfig } = getConfig();
const { meetup } = publicRuntimeConfig;

const hideOnMobile = mq({
  display: ['none', 'none', 'initial'],
});

// TODO: Implement log out
const UserActions = ({ user, navLinksProps }) => {
  const { signout } = useAuth();
  

  return (
    <div>
      {user.isAdmin && (
        <NavAnchor css={hideOnMobile} href="/admin" target="_blank">
          Dashboard
        </NavAnchor>
      )}
      <span css={{ alignItems: 'center', display: 'inline-flex' }}>
        <NavText css={hideOnMobile}>
          <strong>{user.name}</strong>
        </NavText>
        <NavLink href="/signout" onClick={onSignout} {...navLinksProps}>
          <SignoutIcon />
        </NavLink>
      </span>
    </div>
  );
};

const onSignout = event => {
  event.preventDefault();
  signout();
};

const AnonActions = ({ navLinksProps }) => {
  return (
    <div>
      <AuthModal mode="signin">
        {({ openModal }) => (
          <NavLink {...navLinksProps} href="/signin" onClick={openModal}>
            Sign in
          </NavLink>
        )}
      </AuthModal>
      <AuthModal mode="signup">
        {({ openModal }) => (
          <NavButton {...navLinksProps} href="/signup" onClick={openModal}>
            Join
          </NavButton>
        )}
      </AuthModal>
    </div>
  );
};

export default function Navbar({ background = 'white', ...props }) {
  const { isAuthenticated, user } = useAuth();
  const { logoWidth, logoHeight, logoWidthSm, logoHeightSm } = useLogoDimension();
  const foreground = getForegroundColor(background);
  const { themeColor } = meetup;
  const foregroundThemeColor = getForegroundColor(meetup.themeColor);
  
  const navLinksProps = {
    foreground, 
    gridSize, 
    fontSizes,
    themeColor,
    foregroundThemeColor
  }

  return (
    <ThemeContext.Provider value={{ background, foreground }}>
      <Header background={background} {...props} >
        <Link href="/" passHref>
          <a>
            <img
              src={meetup.logo.src}
              width={logoWidth}
              height={logoHeight}
              alt={meetup.name}
              css={mq({
                // boxShadow: shadows.sm,
                paddingTop: 3, 
                marginRight: [gridSize, gridSize * 2],
                width: [logoWidthSm, logoWidth],
                height: [logoHeightSm, logoHeight],
              })}
            />
          </a>
        </Link>
        <div css={{ flex: 1 }}>
          <NavLink href="/" {...navLinksProps}>Home</NavLink>
          <NavLink href="/about" {...navLinksProps}>About</NavLink>
          <NavLink href="/events" {...navLinksProps}>Events</NavLink>
        </div>
        {isAuthenticated ? <UserActions user={user} navLinksProps={navLinksProps} /> : <AnonActions navLinksProps={navLinksProps} />}
      </Header>
    </ThemeContext.Provider>
  );
};
