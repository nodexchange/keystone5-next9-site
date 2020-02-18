/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Query } from 'react-apollo';

import { Container, Loading, H2 } from '../primitives';
import EventItems from '../components/EventItems';
import { Footer, Navbar } from '../containers';
import Meta from '../components/Meta';
import { gridSize } from '../theme';

import { GET_ALL_EVENTS } from '../graphql/events';

export default function Instructors() {
  return (
    <>
      <Meta title="Our Instructors" />
      <Navbar background="white" />
      <Container css={{ marginTop: gridSize * 12 }}>
        <H2>Instructors</H2>
        <Query query={GET_ALL_EVENTS}>
          {({ data, loading, error }) => {
            if (loading) {
              return <Loading isCentered size="xlarge" />;
            }

            if (error) {
              console.error('Failed to load events', error);
              return <p>Something went wrong. Please try again.</p>;
            }

            const { allEvents } = data;
            return <EventItems events={allEvents} />;
          }}
        </Query>
      </Container>
      <Footer />
    </>
  );
}
