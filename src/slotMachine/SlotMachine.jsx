import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

function SlotMachine(props) {
  const { slotReels } = props;

  const clickHandler = (event) => {
    slotReels.forEach((slotReel, index) => {
      const delay = index * 500;
      const shuffleEvent = new CustomEvent(
        'shuffle-slot-machine',
        { detail: { delay } }
      );
      const slotReelElem = document.querySelector(`#${slotReel.props.id}`);
      slotReelElem.dispatchEvent(shuffleEvent);
    });
  };

  return (
    <Fragment>
      {
        slotReels.map((slotReel, index) => {
          return <div key={index}>{slotReel}</div>;
        })
      }
      <Button
        onClick={clickHandler}
        variant="contained"
      >
        Shuffle
      </Button>
    </Fragment>
  );
}

export default SlotMachine;
