import React from 'react'
import Visi from '../components/Visi'
import Misi from '../components/Misi'
import Sejarah from '../components/Sejarah'

const TentangContainer = () => {
  return (
    <section className='mycontainer bg-custom'>
      <Visi/>
      <Misi/>
      <Sejarah/>
    </section>
  )
}

export default TentangContainer
