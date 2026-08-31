import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            {/* Main light */}
            <spotLight
                position={[0, 5, 5]}
                angle={0.25}
                intensity={80}
                penumbra={0.5}
                color="white"
            />

            <primitive
                object={new THREE.RectAreaLight('#b06ffc', 1, 10, 10)}
                position={[1, 3, 4]}
                intensity={15}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
        </>
    )
}
export default HeroLights
