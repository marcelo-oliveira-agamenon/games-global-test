import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../../components/game';
import Title from '../../components/title';
import Filter from '../../components/filter';
import { Game as IGame } from '../../interfaces/game';
import { InitialState } from '../../interfaces/saga';
import './style.scss';

export default function Games() {
  const [localGames, setLocalGames] = useState<Array<IGame>>([]);
  const games = useSelector((state: InitialState) => state.games);

  useEffect(() => {
    setLocalGames(games);
  }, [games]);

  return (
    <div id="games-page">
      <Title title="Games" />

      <Filter
        games={games}
        onChangeFilter={(games) => setLocalGames([...games])}
        disabled={localGames.length === 0}
      />

      <div className="games-container">
        {localGames && localGames.length !== 0
          ? localGames.map((game) => <Game key={game.id} {...game}></Game>)
          : null}
      </div>
    </div>
  );
}
