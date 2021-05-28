import React from 'react'
import './subs.css'

const Subscriptions = () => {
    return (
        <div className="subscriptions">
        <div className="subscriptions__title">
            <h1>Your Subscriptions</h1>
            <h3>Videos you may like</h3>
        </div>
        <div className="subscriptions__videos">

            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4jdHeheVvBQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SarjxS9nxvA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/01FpO0UuULY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        </div>
    )
}

export default Subscriptions
