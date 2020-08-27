import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import slotReelConfigModule from './slotReelConfig';

const useStyles = makeStyles((theme) => {
  return {
    slotItem: {
      display: 'flex',
      justifyContent: 'center',
    },
    slotReel: {
      backgroundColor: theme.palette.common.white,
      border: `4px solid ${theme.palette.secondary.light}`,
      borderRadius: '20px',
      display: 'flex',
      fontSize: 70,
      height: 110,
      justifyContent: 'center',
      margin: theme.spacing(2),
      overflow: 'hidden',
      paddingLeft: 20,
      paddingRight: 20,
    }
  };
});

function SlotReel(props) {
  const { id, items } = props;
  const classes = useStyles();

  useEffect(() => { slotReelConfigModule.setup(id, items) });

  return (
    <Box id={id} className={classes.slotReel}>
      {
        items.map((item, index) => {
          return <div key={index} className={classes.slotItem}>{item}</div>;
        })
      }
    </Box>
  );
}

export default SlotReel;
