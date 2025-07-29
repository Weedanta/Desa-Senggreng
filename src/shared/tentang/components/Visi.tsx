import SectionHeader from '@/shared/components/section/section'
import React from 'react'

const Visi = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <SectionHeader title="Visi">
        <div className="font-medium">
          <p className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#0063B5] to-[#5DCC6C] bg-clip-text text-transparent">
            Terwujudnya Masyarakat Desa <br className='hidden lg:flex'/> Senggreng Sejahtera dan <br className='hidden lg:flex'/>{" "}
            Mandiri
          </p>
        </div>
      </SectionHeader>
    </div>
  )
}

export default Visi
