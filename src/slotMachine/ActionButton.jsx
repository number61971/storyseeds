import React from 'react';
import Box from '@material-ui/core/Box';
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
    <Box>
      <Button
        color="secondary"
        onClick={clickHandler}
        size="large"
        variant="contained"
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}

export default ActionButton;
