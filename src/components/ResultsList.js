import React from 'react';
import { useSelector } from 'react-redux';
import { statsSelectors } from '../redux/stats';
import { v4 as uuidv4 } from 'uuid';

const ResultsList = () => {
  const results = useSelector(state => statsSelectors.getResults(state));
  return (
    <table className="table table-striped">
      <thead>
        <tr key="header">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {results.length > 0 &&
          results.map((result, idx) => (
            <tr key={uuidv4()}>
              <th scope="row">{idx + 1}</th>
              <td>{result.name}</td>
              <td>{result.score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ResultsList;
