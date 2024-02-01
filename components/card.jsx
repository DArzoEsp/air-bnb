import photo from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card() {
    return (
        <div className="card-container">
            <img className="card" src={photo} alt="pic of user img" ></img>
            <h2 className='info'>
                <div className='rating'>
                    <img className="star-info" src={star} alt="star icon" />
                    5.0 <span className='num'> (6) &#x2022; USA</span>
                    </div>
                Life Lessons with Katie Zaferes
                <p><strong>From $136</strong> / person</p>
            </h2>
        </div>
    )
}