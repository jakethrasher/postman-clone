import React from 'react';
import styles from './display.css';
import ClipLoader from 'react-spinners/ClipLoader'
import {css} from '@emotion/core'
function ResultsDisplay({response,loading}) {

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: orange;
        `;
    if(loading){
        return (
        <div className={styles.responseContainer}>
            <ClipLoader css={override}/>
        </div>
        )
    }
    else return (
        <div className={styles.responseContainer}>
            
           <pre className={styles.response}>{response}</pre>
        </div>
    )
}
           
export default ResultsDisplay
