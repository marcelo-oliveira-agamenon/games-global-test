import { useState } from 'react';
import { IFilter, filterKeys, filterTypes } from '../../interfaces/filter';
import { Game } from '../../interfaces/game';
import './style.scss';

function Filter({ games, disabled, onChangeFilter }: IFilter) {
  const [filterBy, setFilterBy] = useState<filterKeys | null>();
  const [sortBy, setSortBy] = useState<filterTypes | null>();

  const handleFilter = (key: filterKeys, type: filterTypes) => {
    const auxGames = games.sort((first, second) => {
      const localType: keyof Game = key as unknown as any;
      if (first[localType] < second[localType]) return type === 'ascending' ? -1 : 1;
      if (first[localType] > second[localType]) return type === 'ascending' ? 1 : -1;
      return 0;
    });

    onChangeFilter(auxGames);
  };

  return (
    <div id="filter-container">
      <select
        className="select-box"
        onChange={(event) => {
          setFilterBy(event.target.value as filterKeys);
          handleFilter(event.target.value as filterKeys, sortBy || 'ascending');
        }}
        defaultValue={''}
        disabled={disabled}>
        <option value="" disabled>
          Choose a Filter by
        </option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
      </select>

      <select
        className="select-box"
        onChange={(event) => {
          setSortBy(event.target.value as filterTypes);
          handleFilter(filterBy || 'name', event.target.value as filterTypes);
        }}
        defaultValue={''}
        disabled={disabled}>
        <option value="" disabled>
          Choose a Sort by
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}

export default Filter;
