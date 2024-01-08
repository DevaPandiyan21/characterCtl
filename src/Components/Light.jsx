export default function Light() {
  return (
    <>
      <directionalLight
        intensity={2.7}
        color={"#FFFFED"}
        castShadow
        shadow-bias={-0.0004}
        position={[-20, 20, 20]}
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={2.5} />
      {/* <directionalLight position={[-4, 4, -4]} 
      castShadow 
      intensity={0.55}
      >
        <orthographicCamera 
         attach={"shadow-camera"}
         args={[50, 50, 10, -10]} 
         far={50 + 50} />
      </directionalLight> */}
    </>
  );
}
