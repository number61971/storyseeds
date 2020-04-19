import React, { Fragment } from 'react';
import ActionButton from './ActionButton';
import SlotReel from './SlotReel';

function SlotMachine(props) {
  const { slotReels, actionProps } = props;
  const slotReelIds = slotReels.map(slotReel => slotReel.id);
  const fullActionProps = { ...actionProps, slotReelIds };

  return (
    <Fragment>
      {
        slotReels.map((slotReelProps, index) => {
          return <SlotReel key={ index } { ...slotReelProps } />;
        })
      }
      <ActionButton { ...fullActionProps } />
    </Fragment>
  );
}

export default SlotMachine;
