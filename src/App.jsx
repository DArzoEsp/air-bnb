/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Card from '../components/card.jsx'
import './App.css'


export default function App() {
    return (
        <div className='main'>
          <Navbar></Navbar>
          <Hero></Hero>
          <Card></Card>
        </div>
    )
}
