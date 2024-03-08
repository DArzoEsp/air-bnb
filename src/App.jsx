/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Card from '../components/card.jsx'
import cardData from '../components/data.jsx'
import './App.css'


export default function App() {
    const data = cardData.map(data => {
      return (
      <Card
        key={data.id}
        {...data}
      />)
    })  
    return (
        <div className='main'>
          <Navbar />
          <Hero />
          <section className="data-container">
            {data}
          </section>
        </div>
    )
}
