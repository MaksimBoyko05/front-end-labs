import React from 'react';
import { gql, useQuery } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

const GET_FILMS_LIST = gql`
  query GetFilmsList {
    allFilms(first: 2) {
      films {
        created
        director
        title
      }
    }
  }
`;

const DataList = () => {
  const { loading, error, data } = useQuery(GET_FILMS_LIST, {
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    }
  });

  if (loading) return <p>Loading...</p>;
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Toaster />
      <ul>
        {data.allFilms.films.map((film, index) => (
          <li key={index}>
            <h3>{film.title}</h3>
            <p>Director: {film.director}</p>
            <p>Created: {film.created}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
