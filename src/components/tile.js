import React from 'react';
import Button from '@mui/material/Button';

const Tile = (props) => {
    const {
        content,
        isActive,
        handleOnClick,
        rowIndex,
        columnIndex,
    } = props;

    return (
        <Button
            className="tile"
            variant={isActive ? "contained" : "outlined"}
            onClick={() => {handleOnClick(rowIndex, columnIndex); }}
        >
            {content}
        </Button>
    );
};

export default Tile;
