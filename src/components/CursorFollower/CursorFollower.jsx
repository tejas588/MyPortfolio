import React, { useEffect, useState } from "react";
import styles from "./CursorFollower.module.css";

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <div
            className={styles.glowEffect}
            style={{
                background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(87, 108, 188, 0.15), transparent 80%)`
            }}
        />
    );
};

export default CursorFollower;
