import React, { Fragment } from 'react';

function SlotMachine(props) {
  const { slotReels } = props;

  return (
    <Fragment>
      { slotReels.map( sr => sr ) }
    </Fragment>
  );
}

export default SlotMachine;
