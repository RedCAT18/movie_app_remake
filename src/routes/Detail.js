import React, { useState, useEffect } from 'react';
import './Detail.css';

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push('/');
//     }
//   }
//   render() {
//     const { location, history } = this.props;

//     return (
//       <div className="movie__background">
//         <img
//           className="background__image"
//           src={location.state.bgImage}
//           alt={location.state.title}
//         />
//         <div className="movie__detail">
//           <div className="detail__title">
//             <h2>{location.state.title}</h2>
//           </div>
//           <div className="detail__year">
//             <span>Released in {location.state.year}</span>
//           </div>
//           <div className="detail__image">
//             <img src={location.state.poster} alt={location.state.title} />
//           </div>
//           <div className="detail__genres">
//             <h3 className="detail__subtitle">Genres</h3>
//             <ul>
//               {location.state.genres.map((genre, index) => (
//                 <li className="detail__genre" key={index}>
//                   {genre}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="detail__summary">
//             <h3 className="detail__subtitle">Summary</h3>
//             <p>{location.state.summary}</p>
//           </div>
//           <div className="back__button">
//             <span onClick={() => history.goBack()}>Back to List</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const Detail = props => {
  const [state] = useState(props);
  const { location, history } = state;

  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  });

  return (
    <div className="movie__background">
      <img
        className="background__image"
        src={location.state.bgImage}
        alt={location.state.title}
      />
      <div className="movie__detail">
        <div className="detail__title">
          <h2>{location.state.title}</h2>
        </div>
        <div className="detail__year">
          <span>Released in {location.state.year}</span>
        </div>
        <div className="detail__image">
          <img src={location.state.poster} alt={location.state.title} />
        </div>
        <div className="detail__genres">
          <h3 className="detail__subtitle">Genres</h3>
          <ul>
            {location.state.genres.map((genre, index) => (
              <li className="detail__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="detail__summary">
          <h3 className="detail__subtitle">Summary</h3>
          <p>{location.state.summary}</p>
        </div>
        <div className="back__button">
          <span onClick={() => history.goBack()}>Back to List</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
