import React from 'react';
import propTypes from 'prop-types';
import Message from './componentsOfMessage/Message';
import Response from './componentsOfMessage/Response';
import Typing from './componentsOfMessage/Typing';

const MessageHustory = ({ list }) => {
  return (
    list.map((el) => {
        switch (el.type) {
            case 'response':
                return <Response key={el.id} from={el.from} message={el.text}/>        
            case 'message':
                return <Message key={el.id} from={el.from} message={el.text}/>
            default:
                return <Typing key={el.id} from={el.from} message={el.text}/>
        }
    })
  )
}

MessageHustory.propTypes ={
    list: propTypes.array.isRequired
}

export default MessageHustory