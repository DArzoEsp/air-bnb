/* eslint-disable react/prop-types */
import star from '../images/star.png'

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText= "ONLINE"
    }

    return (
        <div className="card-container">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className="card-img" src={`../images/${props.coverImg}`} alt="pic of user img" ></img>
            <h2 className='card-info'>
                <div className='rating'>
                    <img className="star-info" src={star} alt="star icon" />
                        {props.stats.rating}
                        <span className='num'>
                            ({props.stats.reviewCount}) &#x2022; {props.location}
                        </span>
                    </div>
                <p className='card--title'>{props.title}</p>
                <p className='card--price'><strong>From ${props.price}</strong> / person</p>
            </h2>
        </div>
    )
}