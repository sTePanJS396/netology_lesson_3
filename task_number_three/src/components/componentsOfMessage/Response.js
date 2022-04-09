import React from 'react';
import propTypes from 'prop-types'

const Response = ({ from, message }) => {
  return (
    <li className="clearfix">
        <div className="message-data align-right">
            <span className="message-data-time">{`${new Date().getHours()}:${new Date().getMinutes()}`}</span> &nbsp; &nbsp;
            {/*Вывод времени сделал чисто из-за красоты*/}
            <span className="message-data-name">{from.name}</span>
            <i className="fa fa-circle me"></i>
        </div>
        <div className="message my-message float-left">
            {message}
        </div>
    </li>
  )
}

Response.propTypes ={
    from: propTypes.object,
    message: propTypes.string
}

export default Response