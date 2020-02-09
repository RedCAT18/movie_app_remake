import React, { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { actionCreators } from '../redux/store.js';

import Movie from '../components/Movie';
import './Home.css';

const Home = ({ state, fetchData, failFetch }) => {
  // const [state, setState] = useState({
  //   isLoading: true,
  //   message: '',
  //   movies
  // });

  useEffect(() => {
    // fetchData();

    axios
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then(res => {
        // console.log(res);
        if (res.status === 200) {
          fetchData(res.data.data.movies);
        } else {
          failFetch();
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        renderComp(state.movies)
      )}
    </section>
  );
};

function mapStateToProps(state, ownProps) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  // console.log(actionCreators.fetchData());
  return {
    fetchData: data => dispatch(actionCreators.dispatchFetchData(data)),
    failFetch: () => dispatch(actionCreators.dispatchFailFetch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
