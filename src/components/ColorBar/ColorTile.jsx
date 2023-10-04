import { useState, useEffect } from "react";

const initialTextColor = "#F0F0F0";
const initialShadowColor = "#202020";

const ColorTile = ({ hex, index, selectedColorIndex }) => {
    const [textColor, setTextColor] = useState(initialTextColor);
    const [shadowColor, setShadowColor] = useState(initialShadowColor);

    useEffect(() => {
        let hexNumbers = hex.split("#")[1].split("");
        let colorSum = 0;

        for (let i = 0; i < 3; i++) {
            let value = "";
            for (let j = 0; j < 2; j++) {
                value += hexNumbers.shift();
            }
            colorSum += parseInt(value, 16);
        }

        // CHECKING IF COLOR IS BRIGHT ENOUGH FOR DARK TEXT
        if (colorSum > 382) {
            setTextColor(initialShadowColor);
            setShadowColor(initialTextColor);
        }
    }, []);

    return (
        <div className="ColorTile" style={{ background: hex, borderStyle: selectedColorIndex == index ? "groove" : "none" }}>
            <p style={{ color: textColor, textShadow: `0 0 10px ${shadowColor}55`}}>
                { index !== undefined ? index + 1 : "N/A" }
            </p>
        </div>
    );
};

export default ColorTile;