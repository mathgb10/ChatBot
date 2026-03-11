import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function BackgroundSG() {
    return (
        // Shader Gradient
        < div className="fixed -z-10 h-full w-full" >
            <ShaderGradientCanvas>
                <ShaderGradient
                    animate="on"
                    axesHelper="off"
                    bgColor1="#fff"
                    bgColor2="#fff"
                    brightness={1.2}
                    cAzimuthAngle={170}
                    cDistance={4.4}
                    cPolarAngle={70}
                    cameraZoom={1}
                    color1= "#020617"
                    color2= "#312e81"
                    color3= "#3b82f6"
                    destination="onCanvas"
                    embedMode="off"
                    envPreset="city"
                    format="gif"
                    fov={45}
                    frameRate={10}
                    gizmoHelper="hide"
                    grain="off"
                    lightType="3d"
                    pixelDensity={1}
                    positionX={0}
                    positionY={0.9}
                    positionZ={-0.3}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.1}
                    rotationX={45}
                    rotationY={0}
                    rotationZ={0}
                    shader="defaults"
                    type="waterPlane"
                    uAmplitude={0}
                    uDensity={1.2}
                    uFrequency={0}
                    uSpeed={0.2}
                    uStrength={3.4}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>
        </div>
    )
}
