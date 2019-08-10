import React from 'react'
import moment from 'moment'

export const techStackArray = (text) => {
  return text.split(',').map(item => item.trim());
}

export const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD')
}

const isChecked = (inputVal, category) => {
  if (category) {
    return inputVal.toLowerCase() === category.toLowerCase()
  }
  return inputVal.toLowerCase() === 'applied';
}

export const SegmentControl = (props) => {
  return <div>
    <ul className="segmented-control">
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="wishlist" name="category" id="wishlist" defaultChecked={isChecked('wishlist', props.category)}/>
        <label className="segmented-control__label left" htmlFor="wishlist">Wishlist</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="applied" name="category" id="applied" defaultChecked={isChecked('applied', props.category)} />
        <label className="segmented-control__label right" htmlFor="applied">Applied</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="interview" name="category" id="interview" defaultChecked={isChecked('interview', props.category)} />
        <label className="segmented-control__label right" htmlFor="interview">Interview</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="offer" name="category" id="offer" defaultChecked={isChecked('offer', props.category)} />
        <label className="segmented-control__label right" htmlFor="offer">Offer</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="rejected" name="category" id="rejected" defaultChecked={isChecked('rejected', props.category)} />
        <label className="segmented-control__label right" htmlFor="rejected">Rejected</label>
    </li>
  </ul>
  </div>
}