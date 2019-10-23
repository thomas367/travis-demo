import React, { Component } from 'react';
import styles from 'components/livesearch.scss';
import { search } from 'utils/utils';
import Movies from 'components/movies/movies';


class LiveSearch extends Component {
	
	constructor() {
		super();

		this.state = {
			movies: null,
			loading: false,
			value: ""
		};
	}
	

  	search = async val => {
    	this.setState({ loading: true });
    	const results = await search(
      		`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    	);
    	const movies = results;

    	this.setState({ movies, loading: false });
  	};

  	onChangeHandler = async e => {
    	this.search(e.target.value);
    	this.setState({ value: e.target.value });
  	};

  	get renderMovies() {
    	let movies = <h1>There's no movies</h1>;
    	if (this.state.movies) {
      		movies = <Movies list={this.state.movies} />;
    	}
    	return movies;
  	}
	render(){
		return(
			<div className={styles.container}>
				<h2 className={styles.heading}>Live Search: React Application</h2>
				<label className={styles.search-label}>
					<input
						value={this.state.value}
						onChange={e => this.onChangeHandler(e)}
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				{this.renderMovies}
			</div>
		)
	}
}
export default LiveSearch;