import React from 'react'
import About from '../components/about'
import BrandDifferentiators from '../components/brand'
import Titlebar from '../components/titlebar'
// import GalleryPage from '../components/galleryPage'

const page = () => {
  return (
    <div>
            <About/>
            <Titlebar title='What Makes Our Brand Different' className='text-center'/>
            <BrandDifferentiators/>
            <Titlebar title='Our Popular Products '/>
            {/* <GalleryPage/> */}
    </div>
  )
}

export default page
