import GameWindow from "./components/GameWindow/GameWindow";
import ColorBar from "./components/ColorBar/ColorBar";

import initColorPalette from "./colors";
import { useEffect, useState } from "react";

const COLOR_KEY_VALUES = ["1", "2", "3", "4", "5"];

const App = () => {
    const [colorPalette, setColorPalette] = useState(initColorPalette);
    const [selectedColorIndex, setSelectedColorIndex] = useState(1);

    const handleKeyDown = (event) => {
        let key = event.key;

        if (COLOR_KEY_VALUES.includes(key)) {
            setSelectedColorIndex(parseInt(key-1));
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    return (
        <div className="App">
            <ColorBar colorPalette={colorPalette} selectedColorIndex={selectedColorIndex} />
            <GameWindow />
        </div>
    );
};

export default App;
