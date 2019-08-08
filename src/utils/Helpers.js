import React from 'react'

export const techStackArray = (text) => {
  return text.split(',')
}

export const SegmentControl = () => {
  return <ul className="segmented-control">
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="wishlist" name="category" id="wishlist"/>
        <label className="segmented-control__label left" htmlFor="wishlist">Wishlist</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="applied" name="category" id="applied" defaultChecked />
        <label className="segmented-control__label right" htmlFor="applied">Applied</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="interview" name="category" id="interview" />
        <label className="segmented-control__label right" htmlFor="interview">Interview</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="offer" name="category" id="offer" />
        <label className="segmented-control__label right" htmlFor="offer">Offer</label>
    </li>
    <li className="segmented-control__item">
        <input className="segmented-control__input" type="radio" value="rejected" name="category" id="rejected" />
        <label className="segmented-control__label right" htmlFor="rejected">Rejected</label>
    </li>
  </ul>
}