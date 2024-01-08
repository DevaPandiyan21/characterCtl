import React from 'react'
import { useConfigurator } from '../contexts/Configurator'
import { Suspense, useEffect, useRef } from 'react';
import { AnimaCharacterModel } from './AnimaCharacterModel';
import { Avatar } from './Avatar';
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl';
import { useFrame } from '@react-three/fiber';

export const Experience = ({characterURL,animationSet}) => {
    const {loading}=useConfigurator();
    const characterRef=useRef(null);
    
    useFrame(() => {
        if (characterRef.current) {
          const currentTranslation = characterRef.current.position;
            console.log(characterRef)
        //   if (currentTranslation.y < -5) {
        //     characterRef.current.position.set(0, 5, 0);
        //   }
        }
      });   

  return (
   <>
             <Suspense fallback={null}>
           
                <Ecctrl animated position={[0,10, 0]} >

                 <EcctrlAnimation characterURL={characterURL}
                    animationSet={animationSet}>
                    <Avatar />

              </EcctrlAnimation>

                </Ecctrl>

            </Suspense>
   </>
  )
}
