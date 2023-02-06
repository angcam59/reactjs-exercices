import React from "react";
import './displayOneClip.css';

function DisplayOneClip(props) {
    
    const { nbVues, dateHeure, urlImg, videoTitle } = props

    return (
        <>
            <article className="articleClip">
                <a href="">
                    <div className="clip">
                        <video controls loop>
                        </video>
                    </div>
                    <div className="infos">
                        <div className ="nbView">
                            <p>{nbVues}</p>
                        </div>
                        <div className="dateHour">
                            <p>{dateHeure}</p>
                        </div>
                    </div>
                    <div className="videoTitle">
                        <img src={process.env.PUBLIC_URL + urlImg} alt="image mister-mv" />
                        <h4>{videoTitle}</h4>
                    </div>
                    <div className="streamerName">
                        <p>Nom Streamer - Activité</p>
                    </div>
                </a>
            </article>
        </>
    )
}

export default DisplayOneClip