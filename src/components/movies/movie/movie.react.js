import React from 'react';
import styles from 'components/movies/movie/movie.scss';

const Movie = props => {
  const { title, poster_path, vote_average } = props.item;

  return (
    <div
      className={styles.Container}
      style={{
        backgroundImage:
          poster_path && `url(http://image.tmdb.org/t/p/w185${poster_path})`
      }}
    >
      <div className={styles.VoteContainer}>
        <span className={styles.Vote}>{vote_average}</span>
      </div>

      <div className={styles.Bottom}>
        <h3 className={styles.Title}>{title}</h3>
      </div>
    </div>
  );
};

export default Movie;