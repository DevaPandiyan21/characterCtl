import {useGLTF} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import { GLTFLoader } from "three-stdlib";
import { useConfigurator } from "../contexts/Configurator";

export const Map5=()=>{
    const map= useGLTF("/map.glb");
    useEffect(()=>{
        map.scene.traverse((child)=>{
            if(child.isMesh){
                child.castShadow = true;
                child.receiveShadow =true;
            }
        })
    })
    const loader = new GLTFLoader();
    const { loading, setLoading } = useConfigurator();
  
    useEffect(()=>{
      loader.load(
        "/map.glb",
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

    return(
        <RigidBody colliders={"trimesh"}  type="fixed" >
            <primitive object={map.scene}/>
        </RigidBody>
       
    )
}
useGLTF.preload("/map.glb");