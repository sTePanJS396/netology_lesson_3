import React from 'react'
import propTypes from 'prop-types';
import Star from './Star';

const Stars = ({star}) => {
    function starGenerator(starNam) {
        const array =[]; 
        for (let index = 0; index < starNam; index++) {
            array.push( <Star key={index}/> );
        };
        return array;
    }

  return (
    <ul className="card-body-stars u-clearfix stars-list">
        {starGenerator(star)}
    </ul>
  )
}

Stars.propTypes = {
    star: propTypes.number.isRequired, 
    starNam: propTypes.number // Добавил в "propTypes" потому, что это параметр в функции "starGenerator"
}

export default Stars