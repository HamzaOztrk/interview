import React from 'react'
import Questions from './Questions';

const InterviewAccord = (props) => {
    const {data} = props;
  return (
    <div className='row'>
        {data.map(item => <Questions key={item.id} {...item}/>)}
    </div>
  )
}

export default InterviewAccord