import React from 'react';
import Movie from './movie/movie.react';
import styles from './movies.scss';

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