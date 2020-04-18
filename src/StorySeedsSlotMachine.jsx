import React, { Fragment } from 'react';
import SlotMachine from './slotMachine/SlotMachine';
import SlotReel from './slotMachine/SlotReel';
import { adjectives, nouns } from './storySeedsTerms';

function StorySeedsSlotMachine() {
  const adjReelProps = {
    id: 'adjectives-reel',
    items: adjectives
  };
  const adjSlotReel = <SlotReel { ...adjReelProps } />;

  const nounsReelProps = {
    id: 'nouns-reel',
    items: nouns
  };
  const nounsSlotReel = <SlotReel { ...nounsReelProps } />;

  const slotMachineProps = {
    slotReels: [
      adjSlotReel,
      nounsSlotReel,
    ],
  }

  return (
    <Fragment>
      <SlotMachine { ...slotMachineProps } />
    </Fragment>
  );
}

export default StorySeedsSlotMachine;
