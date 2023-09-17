import React from 'react'

import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ categories = [], nowPlayingMovies = [], popularMovies = [], topRatedMovies = [], upcomingMovies = [], selectedCategory }) => {
  return (
    <div>
      <FeaturedMovie movie={upcomingMovies?.[5]} />
      <Categories categories={categories} />
      {selectedCategory.movies.length > 0
        && <MoviesSection
          title={categories.find(category => category.id.toString() === selectedCategory.id)?.name}
          movies={
            selectedCategory.movies.slice(1, 7)
          } />
      }

      <MoviesSection
        title='NOW PLAYING FILMS'
        movies={nowPlayingMovies.slice(1, 7)
        } />
      <MoviesSection
        title='POPULAR FILMS'
        movies={popularMovies.slice(13, 19)
        } />
      <MoviesSection
        title='TOP RATED FILMS'
        movies={topRatedMovies.slice(0, 6)
        } />
      <MoviesSection
        title='UPCOMING FILMS'
        movies={upcomingMovies.slice(7, 13)
        } />
    </div>
  )
}

export default HomeContainer