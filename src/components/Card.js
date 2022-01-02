import React from 'react';
import { useState } from "react";
import { styled, Box } from '@mui/system';
import { ModalUnstyled } from '@mui/base';
import { IconButton } from '@material-ui/core';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  bgcolor: '#1F1F1F',
  p: 5,
  outline: 'none',
  borderRadius: 5
};

const Card = ({item}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div className="drinkCard">
        <img
          alt={item.name}
          src={item.images.front}
          className="drinkImage"
          onClick={handleOpen}
          onMouseOver={e => (e.currentTarget.src = item.images.back)}
          onMouseOut={e => (e.currentTarget.src = item.images.front)}
        />
        <StyledModal
          aria-labelledby="drink-modal"
          aria-describedby="modal-describing-drink"
          open={open}
          //onClose={handleClose} // uncomment to exit modal on background click
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <IconButton onClick={handleClose} id="closeButton">
              <img src="https://assets.24g.com/public/2022-frontend-test-project/exit_icon.svg" />
            </IconButton>
            <div className='drinkName'>
              <h1>{item.name}</h1>
            </div>
            <div className='drinkDetails'>
              <h3>Ingredients</h3>
              <ul className='ingredients'>
                {
                  item.ingredients.map((name, index) => <li key={index}>{name}</li>)
                }
              </ul>
              <hr />
              <h3>How to prepare</h3>
              <ul className='stepList'>
                {
                  item.steps.map((step, index) => <li key={index}>STEP {index + 1} {step}</li>)
                }
              </ul>
              <hr />
              <h3>Make it a mocktail</h3>
              <p>{item.mocktail}</p>
              <hr />
              <h3>Glass recommendation</h3>
              <p>{item.glassware}</p>
            </div>
          </Box>
        </StyledModal>    
      </div>
    );
  };

export default Card;