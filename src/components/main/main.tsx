import React from 'react'
import Mainnav from '../mainNav/mainnav'
import Dashbord from '../dashbord/dashbord'
import Performance from '../performance/performance'
import Video from '../video/video'

const main = () => {
  return (
    <section className='px-10 h-full w-full   '>
      <Mainnav/>
      <Dashbord/>
      <Performance/>
      <Video/>
    </section>
  )
}

export default main
