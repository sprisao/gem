import React from 'react';
import Title from '../Title';
import Slide from './Slide';
import './SectionSlide.css';

const SectionSlide = (props) => {
  return (
    <section className='title'>
      {/* {copywrites.map((copywrites) => {
        if (copywrites.section === props.section)
          return <Title key={copywrites.id} {...copywrites}></Title>;
      })} */}
      <Slide filter={props.filter} />
    </section>
  );
};

export default SectionSlide;
