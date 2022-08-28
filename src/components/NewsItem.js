// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/IMG-2076-647x363.jpeg?hdcL41LimmlBFgAizd.e9.gzHUyNRaDe" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger">By {!author ? "Anonymous" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target={"_blank"}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
