import React, { useState } from 'react';
import Tile from './tile.js';

const PageContainer = () => {

    const [tileActivationGrid, setTileActivationGrid] = useState([false, false, false, false]);

    const handleOnClick = (tileIndex) => {
        const updatedTileActivationGrid = [...tileActivationGrid];
        updatedTileActivationGrid[tileIndex] = !updatedTileActivationGrid[tileIndex];
        setTileActivationGrid(updatedTileActivationGrid);
    };

    const tilesToRender = tileActivationGrid.map((isTileActive, index) => (
        <Tile
            key={index}
            tileIndex={index}
            content="🐸"
            isActive={isTileActive}
            handleOnClick={handleOnClick}
        />
    ));

    return (
        <div className="page-container">
            {tilesToRender}
        </div>
    );
};

export default PageContainer;
