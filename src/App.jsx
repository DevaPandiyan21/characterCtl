
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, KeyboardControls, OrbitControls } from "@react-three/drei"
import { Perf } from 'r3f-perf';
import './App.css'
import Light from './Components/Light'
import { Map } from './Components/Map'
import { Map2 } from './Components/Map2'
import { Map4 } from './Components/Map4'
import { Map3 } from './Components/Map3'
// import { Map } from './Components/Map'
import { Physics, RigidBody } from '@react-three/rapier'

import { useConfigurator } from './contexts/Configurator';
import { Experience } from './Components/Experience';
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl';
import { Suspense } from 'react';
import { Avatar } from './Components/Avatar';
import { Playground } from './Components/Playground';
import { Map5 } from './Components/Map5';


function App() {

  const { loading, setLoading } = useConfigurator();
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    { name: 'action1', keys: ['1'] },
    { name: 'action2', keys: ['2'] },
    { name: 'action3', keys: ['3'] },
    { name: 'action4', keys: ['KeyF'] }
  ]

  const characterURL = './AnimatedWoman.glb';

  const animationSet = {
    idle: 'CharacterArmature|Idle',
    walk: 'CharacterArmature|Walk',
    run: 'CharacterArmature|Run',
    jump: 'CharacterArmature|Idle',
    jumpIdle: 'CharacterArmature|Idle',
    jumpLand: 'CharacterArmature|Idle',
    fall: 'CharacterArmature|Idle', // This is for falling from high sky
    action1: 'CharacterArmature|Wave',
    action2: 'CharacterArmature|Death',
    action3: 'CharacterArmature|HitRecieve',
    action4: 'CharacterArmature|Punch_Left'

  }




  return (
    <>
      <EcctrlJoystick />
      <Canvas shadows  >
    
        {/* <Perf position="top-left"/> */}
        <Environment background files="/night.hdr" />
        {/* <Light /> */}
      
        <Physics  debug  timeStep={"vary"} >

          <KeyboardControls map={keyboardMap}>
          <RigidBody type="fixed" colliders="trimesh">
            <mesh position-y={-3.3} receiveShadow>
              <boxGeometry args={[50, 0.5, 50]} />
              <meshStandardMaterial color="mediumpurple" />
            </mesh>
          </RigidBody>
          {/* {loading === true && ( */}
             <Experience characterURL={characterURL} animationSet={animationSet}/>
           {/* )} */}
          </KeyboardControls>
        
          <Map4 />
          {/* <Map2 /> */}
          <Map/>

        </Physics>

        <OrbitControls />

      </Canvas>
    </>
  )
}

export default App



