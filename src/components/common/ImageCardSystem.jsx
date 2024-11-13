import React from 'react'
import ImageCard from '../common/ImageCard'
import { imageCard } from '../../api/imagecard'

function ImageCardSystem() {
  return (
    <>
      <section className='mt-[40px]'>
        <div className='grid grid-cols-12 gap-x-[25px] gap-y-[35px] '>
          {
            imageCard?.map((item, index) => (
              <ImageCard key={index} {...item} />
            ))
          }
        </div>
      </section>

    </>
  )
}

export default ImageCardSystem
