import React from 'react';
import { useGlobalContext } from '../../components/storeContext';
import FeaturedCard from './FeaturedCard';
import './Slide.css';

const Slide = (props) => {
  const { stores, loading } = useGlobalContext();

  // if (loading) {
  //   return <div>로딩중</div>;
  // }
  return (
    <div className='slide'>
      {stores.map((store) => {
        if (store.fields.categoryTitle === props.filter) {
          return <FeaturedCard key={store.id} store={store}></FeaturedCard>;
        }
      })}
    </div>
  );
};

export default Slide;
