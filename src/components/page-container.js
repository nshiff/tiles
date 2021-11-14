import React, { useState } from 'react';
import Tile from './tile.js';

const PageContainer = () => {

    const [tileActivationGrid, setTileActivationGrid] = useState([
        [false, false, false, false],
        [false, false, false, false],
    ]);

    const handleOnClick = (rowIndex, columnIndex) => {
        const updatedTileActivationGrid = [...tileActivationGrid];

        const previous = updatedTileActivationGrid[rowIndex][columnIndex];
        updatedTileActivationGrid[rowIndex][columnIndex] = !previous;
        
        setTileActivationGrid(updatedTileActivationGrid);
    };

    const tilesToRender = tileActivationGrid.map((row, rowIndex) => {
        return row.map((isTileActive, columnIndex) => {
            return (
                <Tile
                    key={`${rowIndex}-${columnIndex}`}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    content="🐸"
                    isActive={isTileActive}
                    handleOnClick={handleOnClick}
                />
            );
        });
    });

    return (
        <div className="page-container">
            {tilesToRender}
        </div>
    );
};

export default PageContainer;
