import React ,{useState,useEffect} from 'react';
import SpM from './components/SpM';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';

const App = ()=>{
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearch]=useState("");
   useEffect(()=>{
    getMovieRequest(searchValue);  
 }, [searchValue]);
 document.body.style = 'background: black;';
      const getMovieRequest = async (searchValue) =>{
         const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=9e575067`;
         const response = await fetch(url);
         const responseJson = await response.json();
         if(responseJson.Search){
         setMovies(responseJson.Search);
         }
       };
      
  return (
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center at mt-4 mb-4  pl-4'>
          <MovieHeading heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearch={setSearch}/>     
          </div>
      <div className='row' style={{backgroundColor:'black'}}>
      <SpM movies={movies}/>
      </div>
      </div>
  );
}

export default App;
