import HomeContainer from '@/containers/home'

import { 
    getSingleCategory,
    getCategories,
    getNowPlayingMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    getPopularMovies
 } from '@/services/movie';

 async function Home ({ params }) {

  const [ 
    { results: nowPlayingMovies },
    { results: topRatedMovies },
    { results: popularMovies },
    { results: upcomingMovies },
    { genres: categories }
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getUpcomingMovies(),
    getNowPlayingMovies(),
    getCategories()
  ])
  
  let selectedCategory;

  if(params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return <HomeContainer 
    nowPlayingMovies={nowPlayingMovies}
    topRatedMovies={topRatedMovies}
    popularMovies={popularMovies}
    upcomingMovies={upcomingMovies}
    categories={categories}
    selectedCategory={{
      id: params.category?.[0] ?? '',
      movies: selectedCategory ? selectedCategory.slice(0,7) : []
    }}
   />
}

export default Home
