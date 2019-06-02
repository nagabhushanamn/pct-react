
import React from 'react';



function renderStars(n) {
    let stars = [];
    for (let i = 0; i < n; i++)
        stars.push(<i style={{ fontSize: '20px', color: 'red' }} className="fa fa-star" key={i}></i>)
    return stars;
}

const Review = (props) => {
    let { value: review } = props;
    return (
        <div className="alert alert-info">
            {renderStars(review.stars)} &mdash; {review.author}
            <hr />
            <div>{review.body}</div>
        </div>
    );
};

export default Review;