import React from 'react'
import { useState } from 'react';

const Modal = ({ mode, setShowModal }) => {

  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? '' : new Date()
  })


  const handleChange = (e) => {
    const {name, value} = e.target;

    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log(data);
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            name='title'
            maxLength={30}
            placeholder="Your task goes here"
            value={data.title}
            onChange={handleChange}></input>
            <br></br>
            <label htmlFor='range'>Drag to select your current progress</label>
          <input 
            required
            name='progress'
            type="range"
            id="range"
            min="0"
            max="100"
            value={data.progress}
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