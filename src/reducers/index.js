import { combineReducers } from "redux";

const moviesReducer = () => {
  return [
    { title: "Spiderman: Homecoming", releaseDate: "04234", rating: 2.3 },
    { title: "Superman: Homecoming", releaseDate: "33334", rating: 7.3 },
    { title: "Wonderwoman: Homecoming", releaseDate: "04674", rating: 5.5 },
  ];
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case "MOVIE_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
