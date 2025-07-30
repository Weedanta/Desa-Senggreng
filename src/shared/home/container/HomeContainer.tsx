import React from 'react'
import HeroSection from '../components/HeroSection'
import KataPenduduk from '../components/KataPenduduk'
import ProfileDesa from '../components/ProfileDesa'
import TentangSection from '../components/TentangSection'
import UMKMSection from '../components/UMKMSection'
import VirtualTour from '../components/VirtualTour'
import WisataSection from '../components/WisataSection'

const HomeContainer = () => {
  return (
    <div className='min-h-screen bg-custom'>
        <HeroSection />
        <TentangSection />
        <ProfileDesa />
        {/* <UMKMSection />
        <WisataSection />
        <VirtualTour /> */}
        <KataPenduduk />
    </div>
  )
}

export default HomeContainer