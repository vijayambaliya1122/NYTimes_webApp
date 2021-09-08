import React from 'react'


export default function News(props) {
    const {byline,title,published_date , media , url} = props.newsData;

    return (
    <>
        <div className="container my-3">
            <div className="row custom-row">
                <div className="col-2">
                    <img className="custom-image" src={media && media.length > 0 && media[0]['media-metadata'][0].url?media[0]['media-metadata'][0].url:'https://static01.nyt.com/images/2021/08/30/well/30insomnia-readers-advice/30insomnia-readers-advice-thumbStandard.jpg'} alt="author" />
                </div>
                <div className="col-9">
                    <h6 className="custom-p">{title}</h6>
                    <h6 className="custom-author">{byline?byline:'By Vijay Ambaliya'}</h6>
                    <h6 className="custom-date"><i className="fa fa-calendar"></i> {published_date}</h6>
                </div>
                <div className="col-1">
                    <a href={url} target="_blank" rel="noreferrer" style={{color:'black'}}><i className="fas fa-greater-than"></i></a>
                </div>
            </div>
        </div>
    </>
    )
}
