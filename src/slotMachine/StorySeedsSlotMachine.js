import React, { Fragment, useEffect } from 'react';

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

  return (
    <Fragment>
      <div id="slot-machine">
        <div className="slotMachineContainer">
          <div>Red</div>
          <div>Orange</div>
          <div>Yellow</div>
          <div>Green</div>
          <div>Blue</div>
          <div>Violet</div>
        </div>
      </div>
    </Fragment>
  );
}

export default StorySeedsSlotMachine;
