import { useEffect ,useState} from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./Moviecard";


function App() {


        const API_URL="https://www.omdbapi.com?apikey=d7197b30";

        const searchMovies  = async(title)=>{
              const response=await fetch(`${API_URL}&s=${title}`)
              const data=await response.json()
              console.log(data)
              Setmovies(data.Search)
        }

       const [movies,Setmovies]=useState([])
       const [searchTerm,SetsearchTerm]=useState('')
        useEffect(()=>{
          searchMovies("marvel")
        },[])
        return (
          <div className="app">
          
                <h1>MovieLand</h1>
              <div className="search">
                <input placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=>SetsearchTerm(e.target.value)}/>
                <img src={SearchIcon}
                alt="SearchIcon"
                onClick={()=>{searchMovies(searchTerm)}}
                />
              </div>

             {
              movies.length >0 ?

             ( <div className="container">
              {
                movies.map((movie)=>(
                  <MovieCard movie={movie}/>
                ))
              }
                
         
              </div>)
              :
              (
                <div> <h3>no movies</h3></div>
              )

            }
            
            
          </div>
        );
}

export default App;
