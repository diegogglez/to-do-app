import React from 'react'

const Modal = () => {

  const mode = 'edit';

  const handleChange = () => {
    console.log('changing!');
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            value={""}
            onChange={handleChange}></input>
            <br></br>
          <input 
            required
            type="range"
            min="0"
            max="100"
            value={""}
            onChange={handleChange}></input>
          <input 
            className={mode}
            type="submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Modal