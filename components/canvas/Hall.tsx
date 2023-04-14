import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Hall = ({ number }: { number: number }) => {
	const hall = useGLTF('./kingsHall/scene.gltf');

	return (
		<mesh className="w-full h-full">
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight
				position={[90, 30, 80]}
				angle={0.8}
				penumbra={1}
				intensity={1.3}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={0.2} />
			<primitive
				object={hall.scene}
				scale={8}
				position={[-0.5*number*-200, 1.5+number*-13, -7*number*-20]}
				rotation={[0, 1.4+number*1.2, 0]}
			/>
		</mesh>
	);
};

const HallCanvas = ({ number }: { number: number }) => {

	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{ position: [100, 0, 30], fov: 100 }}
			gl={{ preserveDrawingBuffer: true }}
			className="w-[100vw] h-[100vh]"
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
				/>
				<Hall number={number} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default HallCanvas;