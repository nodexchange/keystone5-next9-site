/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Container, H1 } from '../primitives';
import { Footer, Navbar } from '../containers';
import Meta from '../components/Meta';
import { gridSize } from '../theme';

import ForgotPassword from '../components/auth/forgotPassword';

export default () => {
  return (
    <>
      <Meta title="Forgot password" />
      <Navbar background="white" />
      <Container width={420} css={{ marginTop: gridSize * 3 }}>
        <H1>Forgot password</H1>
        <ForgotPassword />
      </Container>
      <Footer callToAction={false} />
    </>
  );
};
