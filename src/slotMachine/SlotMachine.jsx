import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ActionButton from './ActionButton';
import SlotReel from './SlotReel';

const useStyles = makeStyles((theme) => {
  return {
    break: {
      flexBasis: '100%',
      height: 0,
    },
    slotMachineContainer: {
      backgroundColor: theme.palette.warning.light,
      border: `4px solid ${theme.palette.primary.light}`,
      borderRadius: '30px',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: theme.spacing(5),
      justifyContent: 'center',
      padding: theme.spacing(2),
    }
  };
});

function SlotMachine(props) {
  const { slotReels, actionProps } = props;
  const slotReelIds = slotReels.map(slotReel => slotReel.id);
  const fullActionProps = { ...actionProps, slotReelIds };

  const classes = useStyles();

  return (
    <Container
      className={classes.slotMachineContainer}
      maxWidth="lg"
    >
      {
        slotReels.map((slotReelProps, index) => {
          return <SlotReel key={ index } { ...slotReelProps } />;
        })
      }
      <div className={classes.break} />
      <ActionButton { ...fullActionProps } />
    </Container>
  );
}

export default SlotMachine;
