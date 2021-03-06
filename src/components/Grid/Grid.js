import React from 'react';
import { useGlobalContext } from '../context';
import GridCard from './GridCard';
import Loading from '../Loading';
import Leerpage from '../View/ErrorPage/LeerPage';
import './Grid.css';

const Grid = ({ filter }) => {
  const { stores, loading } = useGlobalContext();

  let leerfilter;
  if (filter === 'leer') {
    leerfilter = <Leerpage />;
  } else {
    leerfilter = (
      <section className='grid'>
        <section className='grid__wrapper'>
          {stores.map((store) => {
            if (store.firstCategory === filter) {
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                  open={store.openHour}
                  close={store.closeHour}
                ></GridCard>
              );
            }
            if (store.secondCategory === filter) {
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                  open={store.openHour}
                  close={store.closeHour}
                ></GridCard>
              );
            }
            if (store.eupmyeondongRi === filter) {
              console.log(store.eupmyeondongRi);
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                  open={store.openHour}
                  close={store.closeHour}
                ></GridCard>
              );
            } else return null;
          })}
        </section>
      </section>
    );
  }

  if (loading) {
    return <Loading />;
  }
  return <>{leerfilter}</>;
};

export default Grid;
