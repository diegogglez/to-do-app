import React from 'react'

const signOut = () => {
  console.log('singout');
}

const ListHeader = ({ listName }) => {
  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create'>AD NEW</button>
        <button className='signout' onClick={signOut}>SIGN OUT</button>
      </div>        
    </div>
  )
}

export default ListHeader