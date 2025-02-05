/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/solarpunk_village.glb -o src/Components/Map2.jsx -r public -k 
Author: LowPolyBoy (https://sketchfab.com/lowPolyBoy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/solarpunk-village-60d34cf693084564848e64eb8eeae0b8
Title: Solarpunk Village
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { GLTFLoader } from 'three-stdlib';
import { useConfigurator } from '../contexts/Configurator';
import { useFrame } from '@react-three/fiber';

export function Map2(props) {
  const { nodes, materials } = useGLTF('/solarpunk_village.glb')
  const loader = new GLTFLoader();
  const { loading, setLoading } = useConfigurator();

  useEffect(()=>{
    loader.load(
      "/solarpunk_village.glb",
      ( gltf ) => {
        
          setLoading(true)
         
      },
      ( xhr ) => {
       
          // called while loading is progressing
          console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      },
      ( error ) => {
   
          // called when loading has errors
          console.error( 'An error happened', error );
      },
      );
  });



  return (
<>
{/* <RigidBody type="fixed" colliders={false} sensor name="space" position-y={-15} onIntersectionEnter={(other)=>{
 console.log("collided with space1", other.rigidBodyObject.position);
}} 
>
    <CuboidCollider args={[50,0.6,50]}/>
  </RigidBody>

  <RigidBody type="fixed" colliders={false} sensor name="space" position-y={-9} onIntersectionEnter={(other)=>{

//  console.log("collided with space2",  );
if( other.colliderObject.name ==="character-capsule-collider"){
  console.log("collided with space2",other.colliderObject );
}
//  other.rigidBodyObject.setP={x:0,y:-5,z:0}
//  other.rigidBodyObject.position()
}} 
>
    <CuboidCollider args={[50,0.6,50]}/>
  </RigidBody> */}
      <RigidBody type="fixed"  colliders="trimesh" >
    <group {...props}  dispose={null} position={[12,5,0]} >
      <group name="food_canister_carrot001_2" position={[3.886, 0.127, 21.377]}>
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.gradient_color} receiveShadow />
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.gradient_glass}receiveShadow />
        <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="Food_grower001_3" position={[3.886, 0.127, 21.377]}>
        <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="food_canister_cabbage001_4" position={[4.123, 0.127, 23.183]}>
        <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.gradient_glass}receiveShadow />
        <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="food_canister_turnip001_5" position={[3.482, 0.116, 19.813]}>
        <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.gradient_glass}receiveShadow />
        <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="Food_grower002_6" position={[4.123, 0.127, 23.183]}>
        <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="Food_grower003_7" position={[3.482, 0.116, 19.813]}>
        <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.gradient_light}receiveShadow />
      </group>
      <group name="pow_gen01_chicken001_16" position={[-6.761, 14.635, -45.272]}>
        <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.aba_rope}receiveShadow />
        <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.gradient_color} position={[1.477, 3.737, 2.03]}receiveShadow />
      </group>
      <group name="pow_gen01_plain001_18" position={[5.166, 12.07, -57.452]}>
        <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.gradient_color} position={[-0.792, 3.737, 2.382]}receiveShadow />
      </group>
      <group name="pow_gen02001_20" position={[11.384, -0.091, -31.286]}>
        <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.gradient_color}receiveShadow />
        <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.gradient_color} position={[-1.087, 13.108, 0.965]}receiveShadow />
      </group>
      <group name="sn_tree_oak_80" position={[12.637, 0, -13.713]}>
        <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_tree_birch2_81" position={[-5.557, 0, 29.742]}>
        <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_175" geometry={nodes.Object_175.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_reed3_82" position={[3.617, 0, 25.925]}>
        <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.reed}receiveShadow />
        <mesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials.gradient}receiveShadow />
      </group>
      <group name="sn_bush2_85" position={[4.766, 0, 18.351]}>
        <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_reed3001_120" position={[-4.621, 0, 21.406]}>
        <mesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials.reed}receiveShadow />
        <mesh name="Object_256" geometry={nodes.Object_256.geometry} material={materials.gradient}receiveShadow />
      </group>
      <group name="sn_reed3002_121" position={[-4.688, 0, 7.546]}>
        <mesh name="Object_258" geometry={nodes.Object_258.geometry} material={materials.reed}receiveShadow />
        <mesh name="Object_259" geometry={nodes.Object_259.geometry} material={materials.gradient}receiveShadow />
      </group>
      <group name="sn_bush2001_125" position={[-2.732, 0, 0.63]}>
        <mesh name="Object_267" geometry={nodes.Object_267.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_268" geometry={nodes.Object_268.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_tree_birch2001_126" position={[5.982, 0, 27.899]}>
        <mesh name="Object_270" geometry={nodes.Object_270.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_271" geometry={nodes.Object_271.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_tree_birch2002_127" position={[-7.664, 0, 7.19]}>
        <mesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_274" geometry={nodes.Object_274.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_tree_oak001_128" position={[2.357, 0, -27.759]}>
        <mesh name="Object_276" geometry={nodes.Object_276.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_277" geometry={nodes.Object_277.geometry} material={materials.leave}receiveShadow />
      </group>
      <group name="sn_tree_oak002_129" position={[10.382, -0.005, 12.683]}>
        <mesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.gradient}receiveShadow />
        <mesh name="Object_280" geometry={nodes.Object_280.geometry} material={materials.leave}receiveShadow />
      </group>
      <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.gradient_color} position={[-6.422, 0, 19.158]}receiveShadow />
      <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.gradient_color} position={[-5.472, 0, 2.69]}receiveShadow />
      <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.gradient_color} position={[-4.089, 0, -23.916]}receiveShadow />
      <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.gradient_color} position={[6.22, 0, 20.897]}receiveShadow />
      <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.gradient_color} position={[4.56, 0, -6.597]}receiveShadow />
      <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.gradient_color} position={[-2.3, 0, -30.505]}receiveShadow />
      <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.gradient_color} position={[6.497, 0, 11.327]}receiveShadow />
      <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.gradient_color} position={[0, 0, 27.948]}receiveShadow />
      <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.gradient_color} position={[-0.538, 0, 26.521]}receiveShadow />
      <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.gradient_color} position={[-0.733, 0, 25.173]}receiveShadow />
      <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.gradient_color} position={[-1.383, 0, 23.873]}receiveShadow />
      <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.gradient_color} position={[-1.139, 0, 22.443]}receiveShadow />
      <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.gradient_color} position={[-1.935, 0, 20.9]}receiveShadow />
      <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.gradient_color} position={[-1.136, 0, 19.692]}receiveShadow />
      <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.gradient_color} position={[-1.428, 0, 18.678]}receiveShadow />
      <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.gradient_color} position={[-1.253, 0, 17.43]}receiveShadow />
      <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.gradient_color} position={[-0.377, 0, 16.117]}receiveShadow />
      <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.gradient_color} position={[0.499, 0, 14.803]}receiveShadow />
      <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.gradient_color} position={[0.955, 0, 13.361]}receiveShadow />
      <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.gradient_color} position={[1.129, 0, 12.321]}receiveShadow />
      <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.gradient_color} position={[1.826, 0, 11.271]}receiveShadow />
      <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.gradient_color} position={[3.183, 0, 10.465]}receiveShadow />
      <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.gradient_color} position={[4.54, 0, 9.658]}receiveShadow />
      <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.gradient_color} position={[3.258, 0, 3.084]}receiveShadow />
      <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.gradient_color} position={[4.069, 0, 3.76]}receiveShadow />
      <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.gradient_color} position={[4.623, 0, 4.891]}receiveShadow />
      <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.gradient_color} position={[4.635, 0, 6.47]}receiveShadow />
      <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.gradient_color} position={[4.647, 0, 8.049]}receiveShadow />
      <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.gradient_color} position={[2.44, 0, 2.195]}receiveShadow />
      <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.gradient_color} position={[1.27, 0, 1.727]}receiveShadow />
      <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.gradient_color} position={[0.802, 0, 0.488]}receiveShadow />
      <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.gradient_color} position={[0.521, 0, -0.752]}receiveShadow />
      <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.gradient_color} position={[1.34, 0, 3.108]}receiveShadow />
      <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.gradient_color} position={[0.124, 0, 3.365]}receiveShadow />
      <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.gradient_color} position={[-0.976, 0, 3.225]}receiveShadow />
      <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.gradient_color} position={[-1.631, 0, 2.593]}receiveShadow />
      <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.gradient_color} position={[-2.683, 0, 3.271]}receiveShadow />
      <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.gradient_color} position={[-0.718, 0, -1.388]}receiveShadow />
      <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.gradient_color} position={[-0.91, 0, -2.955]}receiveShadow />
      <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.gradient_color} position={[-1.102, 0, -4.522]}receiveShadow />
      <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.gradient_color} position={[-1.696, 0, -5.912]}receiveShadow />
      <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.gradient_color} position={[-2.242, 0, -6.815]}receiveShadow />
      <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.gradient_color} position={[-2.397, 0, -8.065]}receiveShadow />
      <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials.gradient_color} position={[-3.294, 0, -9.425]}receiveShadow />
      <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.gradient_color} position={[-3.311, 0, -10.936]}receiveShadow />
      <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.gradient_color} position={[-3.471, 0, -11.979]}receiveShadow />
      <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.gradient_color} position={[-3.137, 0, -13.194]}receiveShadow />
      <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.gradient_color} position={[-3.68, 0, -14.866]}receiveShadow />
      <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.gradient_color} position={[-4.021, 0, -16.339]}receiveShadow />
      <mesh name="Object_136" geometry={nodes.Object_136.geometry} material={materials.gradient_color} position={[-4.401, 0, -17.323]}receiveShadow />
      <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.gradient_color} position={[-4.14, 0, -18.804]}receiveShadow />
      <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.gradient_color} position={[-2.858, 0, -14.085]}receiveShadow />
      <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials.gradient_color} position={[-4.92, 0, -19.278]}receiveShadow />
      <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.soil}receiveShadow />
      <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials.gradient}receiveShadow />
      <mesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials.grass} position={[4.448, -0.106, 22.259]}receiveShadow />
      <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.grass} position={[-7.964, -0.106, 18.625]}receiveShadow />
      <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials.grass} position={[-7.228, -0.106, 2.488]}receiveShadow />
      <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.grass} position={[4.913, -0.106, -8.336]}receiveShadow />
      <mesh name="Object_155" geometry={nodes.Object_155.geometry} material={materials.grass} position={[-6.77, -0.106, -23.627]}receiveShadow />
      <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials.material} position={[-5.733, 0.51, 5.224]}receiveShadow />
      <mesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.material} position={[-4.969, 1.112, 19.546]}receiveShadow />
      <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.material} position={[0.895, 1.733, -1.674]}receiveShadow />
      <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.material} position={[-4.467, 1.766, 21.939]}receiveShadow />
      <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.material} position={[4.471, 3.014, 24.072]}receiveShadow />
      <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.material} position={[-7.08, 3.979, 20.551]}receiveShadow />
      <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.material} position={[-7.551, 4.042, 20.008]}receiveShadow />
      <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.reed} position={[4.587, 0, 26.324]}receiveShadow />
      <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.fern} position={[-3.268, 0, 20.962]}receiveShadow />
      <mesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.reed} position={[3.802, 0, 27.165]}receiveShadow />
      <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.reed} position={[2.68, 0, 26.781]}receiveShadow />
      <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.reed} position={[3.97, 0, 24.714]}receiveShadow />
      <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.reed} position={[2.136, 0, 25.435]}receiveShadow />
      <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.reed} position={[0.442, 0, 19.854]}receiveShadow />
      <mesh name="Object_197" geometry={nodes.Object_197.geometry} material={materials.reed} position={[0.125, 0, 21.289]}receiveShadow />
      <mesh name="Object_199" geometry={nodes.Object_199.geometry} material={materials.reed} position={[1.159, 0, 20.173]}receiveShadow />
      <mesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.reed} position={[1.239, 0, 17.423]}receiveShadow />
      <mesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials.reed} position={[2.495, 0, 16.765]}receiveShadow />
      <mesh name="Object_205" geometry={nodes.Object_205.geometry} material={materials.reed} position={[2.216, 0, 18.001]}receiveShadow />
      <mesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.reed} position={[4.448, 0, 16.665]}receiveShadow />
      <mesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials.reed} position={[1.996, 0, 22.445]}receiveShadow />
      <mesh name="Object_211" geometry={nodes.Object_211.geometry} material={materials.reed} position={[2.734, 0, 21.927]}receiveShadow />
      <mesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials.reed} position={[1.287, 0, 25.244]}receiveShadow />
      <mesh name="Object_215" geometry={nodes.Object_215.geometry} material={materials.reed} position={[-5.234, 0, 23.439]}receiveShadow />
      <mesh name="Object_217" geometry={nodes.Object_217.geometry} material={materials.reed} position={[-4.719, 0, 22.427]}receiveShadow />
      <mesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials.reed} position={[-4.384, 0, 23.491]}receiveShadow />
      <mesh name="Object_221" geometry={nodes.Object_221.geometry} material={materials.reed} position={[-5.242, 0, 24.752]}receiveShadow />
      <mesh name="Object_223" geometry={nodes.Object_223.geometry} material={materials.reed} position={[-3.415, 0, 19.759]}receiveShadow />
      <mesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials.reed} position={[-4.049, 0, 20.57]}receiveShadow />
      <mesh name="Object_227" geometry={nodes.Object_227.geometry} material={materials.reed} position={[-3.617, 0, 16.463]}receiveShadow />
      <mesh name="Object_229" geometry={nodes.Object_229.geometry} material={materials.reed} position={[-3.446, 0, 15.563]}receiveShadow />
      <mesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials.reed} position={[-2.916, 0, 13.299]}receiveShadow />
      <mesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.reed} position={[-2.35, 0, 6.06]}receiveShadow />
      <mesh name="Object_235" geometry={nodes.Object_235.geometry} material={materials.reed} position={[-2.539, 0, 6.922]}receiveShadow />
      <mesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.reed} position={[-3.193, 0, 6.335]}receiveShadow />
      <mesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials.reed} position={[-3.184, 0, 7.368]}receiveShadow />
      <mesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials.reed} position={[3.667, 0, -0.534]}receiveShadow />
      <mesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.reed} position={[4.277, 0, -1.077]}receiveShadow />
      <mesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.reed} position={[4.703, 0, -0.211]}receiveShadow />
      <mesh name="Object_247" geometry={nodes.Object_247.geometry} material={materials.reed} position={[5.356, 0, -1.134]}receiveShadow />
      <mesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials.reed} position={[6.151, 0, -3.277]}receiveShadow />
      <mesh name="Object_251" geometry={nodes.Object_251.geometry} material={materials.reed} position={[7.103, 0, -3.079]}receiveShadow />
      <mesh name="Object_253" geometry={nodes.Object_253.geometry} material={materials.reed} position={[6.563, 0, -2.17]}receiveShadow />
      <mesh name="Object_261" geometry={nodes.Object_261.geometry} material={materials.fern} position={[1.729, 0, 27.351]}receiveShadow />
      <mesh name="Object_263" geometry={nodes.Object_263.geometry} material={materials.fern} position={[-4.435, 0, 24.314]}receiveShadow />
      <mesh name="Object_265" geometry={nodes.Object_265.geometry} material={materials.fern} position={[3.789, 0, 0.358]}receiveShadow />
    </group>
    </RigidBody>
</>

  )
}

useGLTF.preload('/solarpunk_village.glb')
