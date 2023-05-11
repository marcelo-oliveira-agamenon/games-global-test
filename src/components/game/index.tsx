import { useDispatch } from 'react-redux';
import { Game } from '../../interfaces/game';
import { toggleFavoriteGame } from '../../actions';
import './style.scss';

function GameCard({
  id,
  category,
  isFavorite,
  name,
  picture,
  popularity,
  rating,
}: Game) {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleFavoriteGame(id));
  };

  return (
    <div className="game-card">
      <div className="game-all-info">
        <h1>{name}</h1>

        <h4>{category}</h4>

        <div className="game-info">
          <div>{popularity}</div>

          <div>{rating}</div>
        </div>

        <div onClick={toggleFavorite} className="game-favorite">
          {isFavorite ? 'Remove from ' : 'Add to '}Favorite
        </div>
      </div>

      <div className="game-img">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default GameCard;
