import React from 'react';
import PropTypes from 'prop-types';
import styles from './history.css'

function HistoryDisplay({history}) {

    return (
        <div className={styles.historyContainer}>
            <div className={styles.containerTop}>
                <p className={styles.textContent}>History</p>
                <img src='../../history.svg' alt='history' className={styles.historyIcon }/>
            </div>
            <ul>
            {!!history.length && history.map((item, i)=>(
                <li key={`${i}-${item.method}-${item.url}`}>
                    <span>{item.method} </span>
                    <span>{item.url}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

HistoryDisplay.propTypes = {
    history:PropTypes.arrayOf(PropTypes.shape({
        url:PropTypes.string.isRequired,
        method:PropTypes.string.isRequired,
    }))
}

export default HistoryDisplay

