import clsx from "clsx";
import style from './style.module.scss';
import { useRef, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import styled from "styled-components";
import { useSpring, motion } from "framer-motion";

const Box = styled(motion.div)``;

function DynamicList({ children, layout, ...props }) {
    let selected = useRef();
    function changeState(e) {
        selected.current.innerHTML = e.target.outerHTML;
    }

    const springConfig = { damping: 15, stiffness: 300 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);
    function onMount() {
        scale.set(1);
        opacity.set(1);
    }

    function onHide({ unmount }) {
        const cleanup = scale.onChange(value => {
            if (value <= initialScale) {
                cleanup();
                unmount();
            }
        });
        scale.set(initialScale);
        opacity.set(0);
    }
    return (<Tippy
        // interactive
        animation
        interactive
        onMount={onMount}
        onHide={onHide}
        render={
            attrs => {
                return <Box  {...attrs} style={{ scale, opacity }} >
                    <button onClick={changeState} className={clsx("w-5 h-5 rounded-full bg-red-500")}></button>
                    <button onClick={changeState} className={clsx("w-5 h-5 rounded-full bg-yellow-500")}></button>
                    <button onClick={changeState} className={clsx("w-5 h-5 rounded-full bg-orange-500")}></button>
                    <button onClick={changeState} className={clsx("w-5 h-5 rounded-full bg-black")}></button>
                </Box>;
            }
        }
    >
        <div ref={selected} className="w-5 h-5" ><button className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full "></button></div>
    </Tippy >);
}

export default DynamicList;