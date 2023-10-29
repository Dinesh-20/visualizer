import React from 'react'
import {easing} from 'maath'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'


const Shirt = () => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/shirt_baked.glb')

  const logoTexture = useTexture(snap.logoDecal)
  const FullTexture = useTexture(snap.fullDecal)

  useFrame((state, delta)=>easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))

  const stateString = JSON.stringify(snap)


  return (
    <group key={stateString}>
      <mesh 
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose={null}
      >
        {snap.isFullTexture && 
        (<Decal 
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={FullTexture}>

        </Decal>)}

        {snap.isLogoTexture && 
        (<Decal 
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={logoTexture}
          anisotropy={16}
          depthTest={false}
          depthWrite={true}
          />
          )}

      </mesh>
    </group>
  )
}

export default Shirt