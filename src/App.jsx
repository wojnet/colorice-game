import GameWindow from "./components/GameWindow/GameWindow";
import ColorBar from "./components/ColorBar/ColorBar";

import initColorPalette from "./colors";
import { useEffect, useState } from "react";

const COLOR_KEY_VALUES = ["1", "2", "3", "4", "5"];
const ARROW_KEY_VALUES = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];

const App = () => {
    const [colorPalette, setColorPalette] = useState(initColorPalette);
    const [selectedColorIndex, setSelectedColorIndex] = useState(1);
    const [selectedBoardCell, setSelectedBoardCell] = useState({ x: 0, y: 0 });

    const [playerBoard, setPlayerBoard] = useState([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]);

    const moveSelectedBoardCell = (vector) => {
        setSelectedBoardCell(prev => {
            let tempObject = {x: 0, y: 0, ...prev};

            tempObject.x += vector.x;
            tempObject.y += vector.y;

            if (tempObject.x < 0) tempObject.x = 0;
            if (tempObject.x > 6) tempObject.x = 6;

            if (tempObject.y < 0) tempObject.y = 0;
            if (tempObject.y > 6) tempObject.y = 6;

            return tempObject;
        })
    }

    const getX = () => selectedBoardCell.x;
    const getY = () => selectedBoardCell.y;

    const handleKeyDown = (event) => {
        let key = event.key;
        let code = event.code;

        if (COLOR_KEY_VALUES.includes(key)) {
            setSelectedColorIndex(parseInt(key-1));
        }

        if (ARROW_KEY_VALUES.includes(key)) {
            switch(key) {
            case ARROW_KEY_VALUES[0]: // UP
                moveSelectedBoardCell({x: 0, y: -1});
                break;
            case ARROW_KEY_VALUES[1]: // LEFT
                moveSelectedBoardCell({x: -1, y: 0});
                break
            case ARROW_KEY_VALUES[2]: // DOWN
                moveSelectedBoardCell({x: 0, y: 1});
                break;
            case ARROW_KEY_VALUES[3]: // RIGHT
                moveSelectedBoardCell({x: 1, y: 0});
                break;
            }
        }

        if (code == "Space") {
            setPlayerBoard(prev => {
                let tempBoard = [...prev];
                tempBoard[getX()][getY()] = selectedColorIndex;
                console.log(getX(), getY(), tempBoard);
                return tempBoard;
            })
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
            <ColorBar 
                colorPalette={colorPalette}
                selectedColorIndex={selectedColorIndex}
            />
            <GameWindow
                playerBoard={playerBoard}
                selectedBoardCell={selectedBoardCell}
                selectedColorHex={colorPalette[selectedColorIndex]}
            />
            <p>
                x: {selectedBoardCell.x}
                <br/>
                y: {selectedBoardCell.y}
            </p>
            
        </div>
    );
};

export default App;
