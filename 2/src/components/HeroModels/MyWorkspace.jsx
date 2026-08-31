import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {EffectComposer, SelectiveBloom} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

export function MyWorkspace(props) {
    const {nodes, materials} = useGLTF('/models/my_workspace.glb')
    const screensRef1 = useRef();
    const screensRef2 = useRef();
    return (
        <group {...props} dispose={null}>
            <EffectComposer>
                <SelectiveBloom
                    selection={screensRef1}
                    intensity={0.5} // Strength of the bloom
                    luminanceThreshold={0.2} // Minimum luminance needed
                    luminanceSmoothing={0.9} // Smooth transition
                    blendFunction={BlendFunction.ADD} // How it blends
                />
            </EffectComposer>
            <EffectComposer>
                <SelectiveBloom
                    selection={screensRef2}
                    intensity={0.2} // Strength of the bloom
                    luminanceThreshold={0.2} // Minimum luminance needed
                    luminanceSmoothing={0.9} // Smooth transition
                    blendFunction={BlendFunction.ADD} // How it blends
                />
            </EffectComposer>
            <group position={[3.263, 0.076, -2.193]} rotation={[0, 0.187, 0]} scale={0.531}>
                <mesh geometry={nodes.SpeakerLeft_Plastic_0.geometry} material={materials.Plastic}/>
                <mesh geometry={nodes.SpeakerLeft_lambert1_0.geometry} material={materials.Castors}/>
            </group>
            <group position={[0.519, 0, 0.53]}>
                <mesh geometry={nodes.SpeakerRight_Plastic_0.geometry} material={materials.Plastic}/>
                <mesh geometry={nodes.SpeakerRight_lambert1_0.geometry} material={materials.Castors}/>
            </group>
            <group position={[-0.994, -0.578, 0.763]} rotation={[-0.04, 0.27, 0.012]} scale={0.694}>
                <mesh geometry={nodes.Keyboard_Plastic_0.geometry} material={materials.Plastic}/>
                <mesh geometry={nodes.Keyboard_Mouse1_0.geometry} material={materials.Mouse1} material-color={'#fff'}/>
            </group>
            <group position={[3.343, 4.23, 0.43]} scale={0.115}>
                <mesh geometry={nodes.Mouse_Plastic_0.geometry} material={materials.Plastic}/>
                <mesh geometry={nodes.Mouse_Mouse1_0.geometry} material={materials.Mouse1}/>
            </group>
            <mesh geometry={nodes.Table1_Table_0.geometry} material={materials.Table}/>
            <mesh geometry={nodes.Table2_Castors_0.geometry} material={materials.Castors}/>
            <mesh geometry={nodes.Table2_Table_0.geometry} material={materials.Table}/>
            <mesh geometry={nodes.Table2_Handle_0.geometry} material={materials.Handle}/>
            <mesh geometry={nodes.Mat1_Mat_0.geometry} material={materials.material}/>
            <mesh geometry={nodes.Mat1_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh geometry={nodes.Pen_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh geometry={nodes.Computer_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh geometry={nodes.Computer_Comp2_0.geometry} material={materials.Mouse1}/>
            <mesh geometry={nodes.LeftMonitor_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh ref={screensRef1} geometry={nodes.LeftMonitor_Screen_0.geometry} material={materials.Screen} material-color={'#fff'}/>
            <mesh geometry={nodes.RightMonitor_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh ref={screensRef2} geometry={nodes.RightMonitor_Screen_0.geometry} material={materials.Screen}/>
            <mesh geometry={nodes.Tablet_Castors_0.geometry} material={materials.Castors}/>
            <mesh geometry={nodes.Tablet_Mat_0.geometry} material={materials.material}/>
            <mesh geometry={nodes.Tablet_Plastic_0.geometry} material={materials.Plastic}/>
            <mesh geometry={nodes.pCube4_lambert1_0.geometry} material={materials.lambert1}
                  position={[3.926, 4.363, -2.341]} scale={[0.093, 0.046, 0.192]}/>
            <mesh geometry={nodes.ElectricExtender_lambert1_0.geometry} material={materials.lambert1}/>
            <mesh geometry={nodes.SpeakersCable_Cable_0.geometry} material={materials.Cable}
                  position={[-1.638, 4.319, -1.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.018}/>
            <mesh geometry={nodes.SecondMonitorCable_Cable_0.geometry} material={materials.Cable}/>
            <mesh geometry={nodes.MainMonitorCable_Cable_0.geometry} material={materials.Cable}/>
            <mesh geometry={nodes.MouseCable_Cable_0.geometry} material={materials.Cable}/>
        </group>
    )
}

useGLTF.preload('/models/my_workspace.glb')
