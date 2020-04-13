import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    slotMachine: {
      fontSize: 70,
      height: 90,
      overflow: 'hidden'
    }
  };
});

function StorySeedsSlotMachine() {
  useEffect(() => {
    const slotMachine = document.querySelector('#slot-machine');
    const config = {
      active: 1,
      delay: 500,
      auto: 1500,
      randomize() {
        return this.nextIndex;
      }
    };
    new window.SlotMachine(slotMachine, config);
  });

  const classes = useStyles();

  return (
    <div id="slot-machine" className={classes.slotMachine}>
      <div>Red</div>
      <div>Orange</div>
      <div>Yellow</div>
      <div>Green</div>
      <div>Blue</div>
      <div>Violet</div>
    </div>
  );
}

export default StorySeedsSlotMachine;
