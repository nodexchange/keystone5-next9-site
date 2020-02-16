/** @jsx jsx */

import { useContext, createContext } from 'react';
import getConfig from 'next/config';
import { jsx } from '@emotion/core';

import Link from 'next/link';
import { useAuth } from '../../lib/authetication';
import { SignoutIcon } from '../../primitives';
import { getForegroundColor, useLogoDimension } from '../../helpers';
import { mq } from '../../helpers/media';
import { gridSize, fontSizes, shadows } from '../../theme';
import AuthModal from '../../components/auth/modal';
import {
  Header,
  HeaderGutter,
  NavAnchor,
  NavButton,
  NavLink,
  NavText
} from '../../components';

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const { publicRuntimeConfig } = getConfig();
const { meetup } = publicRuntimeConfig;

const hideOnMobile = mq({
  display: ['none', 'none', 'initial']
});

const ourNavText = {
  color: 'red'
};

// TODO: Implement log out
const UserActions = ({ user, navLinksProps }) => {
  const { signout } = useAuth();
  const { foreground } = useTheme();
  return (
    <div>
      {user.isAdmin && (
        <NavAnchor css={hideOnMobile} href="/admin" target="_blank">
          Dashboard
        </NavAnchor>
      )}
      <span css={{ alignItems: 'center', display: 'inline-flex' }}>
        <NavText css={hideOnMobile} css={{ color: foreground, fontSize: fontSizes.sm }} >
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
          <NavButton
            css={mq({
              backgroundColor: meetup.themeColor,
              border: 'none',
              borderRadius: 20,
              color: getForegroundColor(meetup.themeColor),
              fontWeight: 600,
              lineHeight: 1,
              marginRight: [0, 0],
              padding: '.4rem 1rem'
            })}
            {...navLinksProps}
            href="/signup"
            onClick={openModal}>
            Join
          </NavButton>
        )}
      </AuthModal>
    </div>
  );
};

const NavContainer = props => {
  const { background } = useTheme();

  return (
    <div
      css={mq({
        display: 'flex',
        alignItems: 'center',
        background: background,
        paddingLeft: HeaderGutter,
        paddingRight: HeaderGutter
      })}
      {...props}
    />
  );
};

export default function Navbar({ background = 'white', ...props }) {
  const { isAuthenticated, user } = useAuth();
  const {
    logoWidth,
    logoHeight,
    logoWidthSm,
    logoHeightSm
  } = useLogoDimension();
  const foreground = getForegroundColor(background);
  const { themeColor } = meetup;
  const foregroundThemeColor = getForegroundColor(meetup.themeColor);

  const navLinksProps = {
    foreground,
    gridSize,
    fontSizes,
    themeColor,
    foregroundThemeColor
  };

  return (
    <ThemeContext.Provider value={{ background, foreground }}>
      <Header background={background} {...props}>
        <NavContainer
          css={{
            background: 'rgb(181, 14, 19)',
            color: 'white',
            filter: 'drop-shadow(0px 0px 1px black)'
          }}>
          <span
            css={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
            {meetup.navText}
          </span>
        </NavContainer>
        <div
          css={{
            paddingLeft: '30px',
            paddingRight: '30px',
            background: '#101010',
            filter: 'drop-shadow(0px 0px 1px black)'
          }}>
          <NavContainer
            css={{
              background: '#101010',
              color: 'white'
            }}>
            <Link href="/" passHref>
              <a>
                <img
                  src={meetup.logo.src}
                  width={logoWidth}
                  height={logoHeight}
                  alt={meetup.name}
                  css={mq({
                    boxShadow: shadows.sm,
                    marginRight: [gridSize, gridSize * 2],
                    width: [logoWidthSm, logoWidth],
                    height: [logoHeightSm, logoHeight]
                  })}
                />
              </a>
            </Link>
            <div css={{ flex: 1 }}>
              <NavLink href="/">
                <span css={ourNavText}>Our</span><br /> Services
              </NavLink>
              <NavLink href="/about">
              <span css={ourNavText}>Our</span><br /> Promise
              </NavLink>
              <NavLink href="/events">
                <span css={ourNavText}>Our</span><br /> Instructors
              </NavLink>
            </div>
            {isAuthenticated ? <UserActions user={user} /> : <AnonActions />}
          </NavContainer>
        </div>
      </Header>
    </ThemeContext.Provider>
  );
}
