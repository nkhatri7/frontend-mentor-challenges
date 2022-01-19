import React from 'react';
import './Score.scss';
import { ReactComponent as PlusIcon } from '../../images/icon-plus.svg';
import { ReactComponent as MinusIcon } from '../../images/icon-minus.svg';

const Score = ({ score, id, handleUpvote, handleDownvote }) => {
    return (
        <div className='score'>
            <button className="graphic-btn" onClick={() => handleUpvote(id)}>
                <PlusIcon />
            </button>
            <p className="score-number">{score}</p>
            <button className="graphic-btn" onClick={() => handleDownvote(id)}>
                <MinusIcon />
            </button>
        </div>
    );
}

export default Score;
