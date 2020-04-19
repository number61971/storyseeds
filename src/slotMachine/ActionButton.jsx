import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import shuffleEvent from './shuffleEvent';

function ActionButton(props) {
  const { slotReelIds } = props;
  const buttonLabel = props.buttonLabel || 'Shuffle!';

  const clickHandler = (event) => {
    slotReelIds.forEach((id, index) => {
      const delay = index * 500;
      const slotReelElem = document.querySelector(`#${id}`);
      slotReelElem.dispatchEvent(shuffleEvent(delay));
    });
  };

  return (
    <Fragment>
      <Button onClick={clickHandler} variant="contained">
        {buttonLabel}
      </Button>
    </Fragment>
  );
}

export default ActionButton;
