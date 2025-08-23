import React from 'react'

const Review = ({ review, text}) => {
  return (
    <p>
      {text} {review}
    </p>
  )
}

export default Review