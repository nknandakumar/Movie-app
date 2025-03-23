import { useState ,useEffect } from 'react'
import { useDebounce } from "react-use";

import MovieCard from './components/MovieCard'
import  Search  from './components/Search'
import Loading from './components/Loading';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

const   App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMsg, setErrorMsg] = useState(null);
	const [movieList, setMovieList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
    //const [trendingMovies, setTrendingMovies] = useState([])

	useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
		setIsLoading(true);
		try {
			const endpoint = query
				? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
				: `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
			const response = await fetch(endpoint, API_OPTIONS);
			const data = await response.json();
			if (!response.ok) {
				throw new Error("Error in fetching");
			}
			if (data.response === false) {
				setErrorMsg(data.Error || "Failed to fetch movies");
				setMovieList([]);
				return;
			}
			setMovieList(data.results || []);
			console.log(data.results || []);

		/**
		 	if (query && data.results.length > 0) {
				await updateSearchCount(query, data.results[0]);
			}
		 */
		} catch (error) {
			console.error(`Error in fetching movies : ${error}`);
			setErrorMsg("Error in fetching movies, please try again");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies(debounceSearchTerm);
	},[debounceSearchTerm])

  return (
<main className="overflow-x-hidden">
  <div className="center pattern ">
      <header>
      <img src="/hero.png" alt="" />
      <h1>Find <span className='text-gradient' >Movies</span> You’ll Love Without the Hassle</h1>
       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
  </div>
  <section className="px-5 py-12 xs:p-10 max-w-7xl mx-auto">
    <h2>All Movies</h2>
    <div className="  align-top columns-1 md:columns-3 lg:columns-4 mb-10 ">
      {
		isLoading ? (<Loading/>) : errorMsg ? (<p className="text-center text-red-500">{errorMsg}</p>) :
			(
				movieList.map((movie)=>(
					<MovieCard key={movie.id} movie={movie} />
				))
			)
	  }
	
    </div>
  </section>



</main>
  )
}

export default   App