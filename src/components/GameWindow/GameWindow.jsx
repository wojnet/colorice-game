import GameBoard from "../Board/GameBoard";

const GameWindow = ({ playerBoard, selectedBoardCell, selectedColorHex }) => {
    return (
        <div className="GameWindow">
            <GameBoard 
                board={playerBoard}
                selectedBoardCell={selectedBoardCell}
                selectedColorHex={selectedColorHex}
            />
        </div>
    );
}

export default GameWindow;