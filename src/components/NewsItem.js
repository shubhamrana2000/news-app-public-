import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }} >
          <div style={{display:'flex',justifycontent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={ !imageUrl ? "https://images.cnbctv18.com/wp-content/uploads/2022/02/Kyiv1-e1645716613798-1019x573.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title" ><strong>{title}</strong></h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                <em> By <strong>{!author ? "Unknown" : author}</strong> on{" "} <strong>{new Date(date).toGMTString()}</strong> </em>
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark" >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
