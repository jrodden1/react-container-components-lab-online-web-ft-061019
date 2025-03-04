import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
   constructor() {
      super();
      this.state = {  
         reviews: []
      }
   }

   componentDidMount() {
      fetch(URL)
         .then(resp => resp.json())
         .then(apiData => {
            this.setState({reviews: apiData.results})
         })
   }

   dummyOnClick = () => {
      return alert("Dummy on Click worked")
   }

   render() { 
      return (  
         <div className="latest-movie-reviews">
            <h2>Latest Movie Reviews</h2>
            <MovieReviews onClick={this.dummyOnClick} reviews={this.state.reviews} />
         </div>
      );
   }
}
 
export default LatestMovieReviewsContainer;