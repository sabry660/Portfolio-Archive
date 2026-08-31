import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";
import {MyWorkspace} from "./MyWorkspace.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    return (
        <Canvas camera={{position: [0, 5, 15], fov: 45}}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights />

            <Particles count={100}/>

            <group
                scale={isMobile ? 0.5 : 0.65}
                position={[isMobile || isTablet ? 0 : -0.8, -3, 0]}
                rotation={[0, Math.PI / 6, 0]}
            >
                <MyWorkspace/>
            </group>
        </Canvas>
    )
}
export default HeroExperience
