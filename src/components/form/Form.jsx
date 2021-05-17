import React from 'react'
import PropTypes from 'prop-types'
import styles from './form.css'

function Form({
    handleSubmit, 
    method, 
    onMethodChange, 
    handleInputChange,
    url,
    reqBody,
}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input
                        placeholder='Enter URL'
                        className={styles.urlInput}
                        type="text" 
                        name="url" 
                        onChange={handleInputChange} 
                        value={url}/>
                </label>
                <button className={styles.submitButton}>GO</button>
            </div>
           
            <div className={styles.radioContainer}>
                <label className={styles.radioLabel}>
                    
                    <input 
                        type="radio" 
                        name="method" 
                        value="GET" 
                        checked={method==='GET'} 
                        onChange={onMethodChange}/>
                    <span>GET</span>
                </label>
                <label className={styles.radioLabel}>       
                    <input 
                        type="radio" 
                        name="method" 
                        value="POST" 
                        checked={method==='POST'} 
                        onChange={onMethodChange}/>
                    <span>POST</span>
                </label>
                <label className={styles.radioLabel}>                
                    <input 
                        type="radio" 
                        name="method" 
                        value="PUT" 
                        checked={method==='PUT'} 
                        onChange={onMethodChange}/>
                    <span>PUT</span>
                </label>
                <label className={styles.radioLabel}>
                    <input 
                        type="radio" 
                        name="method" 
                        value="DELETE" 
                        checked={method==='DELETE'} onChange={onMethodChange}/>
                    <span>DELETE</span>
                </label>
            </div>
            <div >
                <label>
                    <textarea
                        placeholder="raw JSON body"
                        className={styles.textArea} 
                        type="text" 
                        name="reqBody"
                        onChange={handleInputChange}
                        value={reqBody}/>
                </label>
            </div>
        </form>
    )
}
                       
Form.propTypes = {
    handleSubmit:PropTypes.func.isRequired,
    method:PropTypes.string.isRequired,
    onMethodChange:PropTypes.func.isRequired,
    handleInputChange:PropTypes.func.isRequired,
    url:PropTypes.string.isRequired,
    reqBody:PropTypes.any.isRequired
}

export default Form
