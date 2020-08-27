import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import shuffleActionModule from './shuffleAction';

function ActionButton(props) {
  const { slotReelIds } = props;
  const buttonLabel = props.buttonLabel || 'Shuffle!';

  const mouseDownHandler = (_event) => {
    shuffleActionModule.onMouseDownSound.play();
  }

  const shuffle = (elementId, delayFactor) => {
    const delay = delayFactor * 500;
    shuffleActionModule.shuffleAction(elementId, delay);
  }

  const clickHandler = (_event) => {
    shuffleActionModule.onMouseUpSound.play();
    slotReelIds.forEach((id, index) => { shuffle(id, index) });
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
