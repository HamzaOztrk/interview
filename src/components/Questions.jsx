import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Questions = ({id, question, answer}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={()=> setShow(false)}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques">
            <h5>
             {id}.{question}
            </h5>
            <button onClick={()=> setShow(true)}>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
