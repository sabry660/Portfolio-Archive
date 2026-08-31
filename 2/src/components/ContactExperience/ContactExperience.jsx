import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {RainyDay} from "./RainyDay.jsx";

const ContactExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});

    return (
        <Canvas camera={{position: [1.5, -0.5, -2], fov: 60}} shadows>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={0.4}
                position={[0, -1.25, 0]}
            >
                <RainyDay/>
            </group>
        </Canvas>
    );
};

export default ContactExperience;
