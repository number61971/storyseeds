import React, { Fragment } from 'react';
import SlotReel from './SlotReel';
import { adjectives, nouns } from './terms';

function StorySeedsSlotMachine() {
  const adjReelProps = {
    id: 'adjectives-reel',
    items: adjectives
  };

  const nounsReelProps = {
    id: 'nouns-reel',
    items: nouns
  };

  return (
    <Fragment>
      <SlotReel { ...adjReelProps } />
      <SlotReel { ...nounsReelProps } />
    </Fragment>
  );
}

export default StorySeedsSlotMachine;
