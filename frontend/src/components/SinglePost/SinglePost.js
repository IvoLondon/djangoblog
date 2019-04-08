import React from 'react';

const SinglePost = (props) => {
    return (
        <div>
            <button onClick={props.backToMain()}>Back to Main</button>
            <h3>{props.details.title}</h3>
            <p>{props.details.text}</p>
        </div>
    );
};

export default SinglePost;
