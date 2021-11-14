import React, {useState} from 'react';
import Tile from './tile.js';

const PageContainer = () => {

    const [isActive, setIsActive] = useState(false);
    const handleOnClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="page-container">
            <Tile
                content="🐸"
                isActive={isActive}
                handleOnClick={handleOnClick}
            />
        </div>
    );
};

export default PageContainer;
