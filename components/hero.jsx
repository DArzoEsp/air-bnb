import photoGrid from '../images/photo-grid.png'

export default function Hero() {
    return (
        <div className="hero"> 
            <img className='photo-grid' src={photoGrid} alt=""/>
            <h1>Online Experience</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </div>
    )
}