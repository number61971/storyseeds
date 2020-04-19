import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import randomIndex from './random';
import { SHUFFLE_EVENT } from './shuffleEvent';

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
    const { id, items } = props;

    const config = {
      active: randomIndex(0, items.length),
    };

    const slotMachineElem = document.querySelector(`#${id}`);
    const slotMachine = new window.SlotMachine(slotMachineElem, config);

    slotMachineElem.addEventListener(SHUFFLE_EVENT, (event) => {
      setTimeout(() => { slotMachine.shuffle(5) }, event.detail.delay);
    });
  });

  const classes = useStyles();
  const { id, items } = props;

  return (
    <div id={id} className={classes.slotReel}>
      {
        items.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      }
    </div>
  );
}

export default SlotReel;
