
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [watchedButtonClicked, setwatchedButtonClicked] = useState(false);
  const [movie, setMovie] = useState([]); //for storing and displaying
  const [inputMovie, setInputMovie] = useState(''); //for updating 

  const [watched,setWatched] = useState([]);
  
  return (
    <>
    <div className = 'titleWrapper'>
    <h1> To-Watch List </h1>
    </div>
    <div className ='toDoWrapper' >
   
    <DisplayName movie={movie} ></DisplayName>
    </div>
 
    <div className = 'statusDiv'>
    <button className = 'watchedButton' onClick={()=>setwatchedButtonClicked(true)} > See watched </button>
      <ul>
        {watched.map((watched,index) => (<li key = {index}> {watched}<button onClick={()=> deleteWatched(index)}> Remove </button></li> )) }
      </ul>
  </div>
    
  
    </>
 
  );



  function addToWatched(index){
    const watchedList = movie.filter((_,i)=> i=== index );
    watchedButtonClicked?setWatched(prevWatched => [...prevWatched, watchedList]):setwatchedButtonClicked(false);
    
    
  }

  function deleteWatched(index){
    const updatedList = watched.filter((_,i) => i !== index)
    setWatched(updatedList);

  }

  function handleAddMovie(e){ 
    e.preventDefault();
    setMovie(prevMovies => [...prevMovies,inputMovie]);
    setInputMovie('');   
  }

  function handleKey(e){
    if(e.key === 'Enter' && inputMovie !== ''){
      handleAddMovie(e);
    }
  }

  function deleteMovie(index){
    const updatedList = movie.filter((_,i) => i !== index)
    setMovie(updatedList);
  }


 

  function DisplayName({movie}){
    return(

      <>
    <form>
      <label>
        <input 
        placeholder='What is on your mind?'
        value={inputMovie} 
        onChange={e => setInputMovie(e.target.value)} 
        autoFocus
        onKeyDown={handleKey}
        className='textBar'
        /> 

        </label>       
      
      </form>
    
      <ul className='list' >
        {movie.map((movie,index) => (<li key={index}> 
          {movie}
          <div >
          <button onClick={() => addToWatched(index)}> Watched </button>  
          <button onClick={()=> deleteMovie(index) }> Delete </button>
          </div>

          </li>))}
        
      </ul>
      </>
    );

  }
}
