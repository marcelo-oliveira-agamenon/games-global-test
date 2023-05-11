import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../../components/game';
import Title from '../../components/title';
import Filter from '../../components/filter';
import { Game as IGame } from '../../interfaces/game';
import { InitialState } from '../../interfaces/saga';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [localGames, setLocalGames] = useState<Array<IGame>>([]);
  const games = useSelector((state: InitialState) =>
    state.games.filter((game) => game.isFavorite === true)
  );

  useEffect(() => {
    setLocalGames(games);
  }, [games]);

  return (
    <div id="favorites-container">
      <Title title="Favorites" />

      <Filter
        games={games}
        onChangeFilter={(games) => setLocalGames([...games])}
        disabled={localGames.length === 0}
      />

      <div className="games-container">
        {localGames && localGames.length !== 0 ? (
          localGames.map((game) => <Game key={game.id} {...game}></Game>)
        ) : (
          <div className="empty-favorites">
            <span>
              There&apos;s no favorites games at the moment! Please add some here!
              <br />
              <Link to="/games">Go to Games page</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
