import React, { Fragment } from 'react';
import SlotMachine from './slotMachine/SlotMachine';
import { adjectives, nouns } from './storySeedsTerms';

function StorySeedsSlotMachine() {
  const adjReelProps = {
    id: 'adjectives-reel',
    items: adjectives
  };

  const nounsReelProps = {
    id: 'nouns-reel',
    items: nouns
  };

  const slotMachineProps = {
    slotReels: [
      adjReelProps,
      nounsReelProps,
    ],
  }

  return (
    <Fragment>
      <SlotMachine { ...slotMachineProps } />
    </Fragment>
  );
}

export default StorySeedsSlotMachine;
