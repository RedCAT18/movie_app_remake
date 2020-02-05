import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import './Home.css';

// class Home extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };

//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get(
//       'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
//     );
//     this.setState({ movies, isLoading: false });
//   };

//   componentDidMount() {
//     this.getMovies();
//   }

//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader__text">'Loading...'</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map(movie => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 genres={movie.genres}
//                 bgImage={movie.background_image_original}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     );
//   }
// }

const Home = () => {
  const [state, setState] = useState({
    isLoading: true,
    message: ''
  });
  // const [message, setMessage] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then(res => {
        // console.log(res);
        if (res.status === 200) {
          setState({ ...state, isLoading: false });
          setMovies(res.data.data.movies);
        } else {
          setState({
            ...state,
            message: 'Something is wrong. Please try later'
          });
        }
      });
  }, [movies, state]);

  const renderMessage = msg => {
    return (
      <div className="error__msg">
        <span className="error__text">{msg}</span>
      </div>
    );
  };

  const renderComp = movies => {
    return (
      <div className="movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            bgImage={movie.background_image_original}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="container">
      {state.isLoading ? (
        <div className="loader">
          <span className="loader__text">
            <img src="./reload.svg" alt="loading" />
          </span>
        </div>
      ) : state.message.length !== 0 ? (
        renderMessage(state.message)
      ) : (
        renderComp(movies)
      )}
    </section>
  );
};

export default Home;
