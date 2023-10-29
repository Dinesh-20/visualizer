import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { CustomButton } from '../components'
import state from '../store'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import React from 'react'

const Home = () => {
  const snap = useSnapshot(state)
  return (
<AnimatePresence>
  {snap.intro && (
    <motion.section className='home' {...slideAnimation('left')}>
      <motion.header {...slideAnimation('down')}>
        <p>
          Powered By <strong>Three JS</strong>
          <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' style={{display: 'inline-block'}}/>
        </p>
      </motion.header>
      <motion.div className='home-content' {...headContainerAnimation}>
        <motion.div {...headTextAnimation}>
          <h1 className='head-text'>
            LET'S <br></br> DO IT
          </h1>

        </motion.div>
        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
          <p className='max-w-md font-normal text-gray-600 text-base'>
            <strong>A place to visualise your creativity and see it to fruition.</strong>  
          </p>
          <CustomButton 
          type='filled'
          title='Customize It'
          handleClick = {()=> state.intro = false}
          customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'
          />
        </motion.div>

      </motion.div>
    </motion.section>
  )}
  
</AnimatePresence>
  )
}

export default Home