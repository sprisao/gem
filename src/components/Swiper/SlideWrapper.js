import React from 'react';
import { useGlobalContext } from '../context';
import Slide from './Slide';
import Loading from '../Loading';
import './SlideWrapper.css';

const Slide = (props) => {
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='title'>
      <div className='slide'>
        {stores.map((store) => {
          if (store.firstCategory[0] === props.filter) {
            return <FeaturedCard key={store.id} store={store}></FeaturedCard>;
          }
        })}
      </div>
    </section>
  );
};

export default Slide;