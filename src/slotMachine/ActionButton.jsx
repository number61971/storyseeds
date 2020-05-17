import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import shuffleEventModule from './shuffleEvent';

function ActionButton(props) {
  const { slotReelIds } = props;
  const buttonLabel = props.buttonLabel || 'Shuffle!';
  const onMouseDownSound = new Audio('/audio/button_press.mp3');
  const onMouseUpSound = new Audio('/audio/button_up.mp3');

  const mouseDownHandler = (_event) => {
    onMouseDownSound.play();
  }

  const clickHandler = (_event) => {
    onMouseUpSound.play();

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
        onMouseDown={mouseDownHandler}
        onMouseUp={clickHandler}
        size="large"
        variant="contained"
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}

export default ActionButton;
