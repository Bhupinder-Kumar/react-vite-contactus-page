import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactHeader from './components/Header/ContactHeader'
import Navigation from './components/Navigation/Navigation'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />

      </main>
    </>
  )
}

export default App
