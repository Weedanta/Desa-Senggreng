import React from 'react'

const footer = () => {
  return (
    <section className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Desa Senggreng. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ using Next.js and Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default footer