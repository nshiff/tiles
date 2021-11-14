import React from 'react';
import Button from '@mui/material/Button';

const Tile = (props) => {
    const { content } = props;

    return (
        <Button
            className="tile"
            variant="contained"
        >
            {content}
        </Button>
    );
};

export default Tile;
