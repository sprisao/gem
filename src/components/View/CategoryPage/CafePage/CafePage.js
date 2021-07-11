import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';
import Footer from '../../../Footer';

import { useGlobalContext } from '../../../context';

const CafePage = () => {
  const { cafes, cafesLoading } = useGlobalContext();
  console.log(cafes);
  if (cafesLoading) {
    return <Loading />;
  } else
    return (
      <>
        <CategoryComponent category='카페' stores={cafes} />
        <Footer />
      </>
    );
};

export default CafePage;
