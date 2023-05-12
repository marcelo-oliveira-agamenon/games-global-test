import { useDispatch } from 'react-redux';
import { Rating } from '@mui/material';
import { Game } from '../../interfaces/game';
import { toggleFavoriteGame } from '../../actions';
import './style.scss';

function GameCard(game: Game) {
  const { id, category, isFavorite, name, picture, popularity, rating } = game;
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    const auxGame = {
      ...game,
      isFavorite: !isFavorite
    };
    dispatch(toggleFavoriteGame(auxGame));
  };

  return (
    <div className="game-card">
      <div className="game-all-info">
        <h1 className="game-title-info">{name}</h1>

        <h4 className="game-category-info">{category} Game</h4>

        <div className="game-info">
          <div className="game-info-popularity">{popularity}</div>

          <div>
            <Rating value={rating} readOnly />
          </div>
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
