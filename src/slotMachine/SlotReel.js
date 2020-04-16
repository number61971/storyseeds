import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    slotReel: {
      fontSize: 70,
      height: 90,
      overflow: 'hidden'
    }
  };
});

function SlotReel(props) {
  useEffect(() => {
    const slotMachine = document.querySelector(`#${props.id}`);
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
  const { id, items } = props;

  return (
    <div id={id} className={classes.slotReel}>
      { items.map(item => <div>{item}</div>) }
    </div>
  );
}

export default SlotReel;
