import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFetchGame } from '../../actions';
import { InitialState } from '../../interfaces/saga';

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state: InitialState) => state.games);

  useEffect(() => {
    dispatch(loadFetchGame());
  }, [dispatch]);

  return (
    <div>
      <>{console.log('home ', games)}</>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
