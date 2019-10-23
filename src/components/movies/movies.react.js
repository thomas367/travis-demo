import React from 'react';
import Movie from 'components/movies/movie/movie.react';
import styles from 'components/movies/movies.scss';

const Movies = ({ list }) => {
	let cards = <h3>Loading...</h3>;

  	if (list) {
    	cards = list.map((m, i) => <Movie key={i} item={m} />);
  	}

  	return (
    	<div>
      		<div className={styles.ContainerInner}>{cards}</div>
    	</div>
  	);
};

export default Movies;