import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import shuffleEventModule from './shuffleEvent';

function ActionButton(props) {
  const { slotReelIds } = props;
  const buttonLabel = props.buttonLabel || 'Shuffle!';

  const clickHandler = (event) => {
    slotReelIds.forEach((id, index) => {
      const delay = index * 500;
      const slotReelElem = document.querySelector(`#${id}`);
      slotReelElem.dispatchEvent(
        shuffleEventModule.shuffleEvent(delay)
      );
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
