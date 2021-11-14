import React from 'react';
import Button from '@mui/material/Button';

const Tile = (props) => {
    const {
        content,
        isActive,
        handleOnClick,
        tileIndex,
    } = props;

    return (
        <Button
            className="tile"
            variant={isActive ? "contained" : "outlined"}
            onClick={() => {handleOnClick(tileIndex);}}
        >
            {content}
        </Button>
    );
};

export default Tile;
