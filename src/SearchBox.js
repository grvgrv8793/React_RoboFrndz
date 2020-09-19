import React from 'react';

const  SearchBox = ({searchfield, searchChange}) =>{
  return(
    <div className='pa2'>
      <input
       className='pa3 ba b--green bg-lightest-blue '
       type='search'
       placeholder='Search Robots'
       onChange={searchChange}  // Anytime there is change in input that is if we type something to search searchChange function will run
        />
    </div>
  );
}

export default SearchBox;
