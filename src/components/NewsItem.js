import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageurl,newsUrl,author,date}=props;
    let myStyle={
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'#152238':'white',
    }
    return (
      <div>
        <div className="card" style={{width: "",
            color: props.mode === "dark" ? "white" : "black",
          }}>
          <img src={!imageurl?"https://img.freepik.com/premium-vector/breaking-news-template-with-3d-red-blue-badge-breaking-news-text-dark-blue-with-earth-world-map-background_34645-1113.jpg?w=1060":imageurl} className="card-img-top" alt="..." />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className={"btn btn-sm btn-dark"}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
