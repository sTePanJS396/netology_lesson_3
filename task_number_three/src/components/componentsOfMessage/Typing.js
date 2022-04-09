import React from 'react';
import propTypes from 'prop-types'

const Typing = ({ from, message }) => {
  return (
    <li className="clearfix">
        <div className="typing float-left">{`${from.name} печатает...`}</div>
    </li>
  )
}

Typing.propTypes ={
    from: propTypes.object,
    message: propTypes.string
}

export default Typing