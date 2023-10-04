import BoardElement from "./BoardElement";
import colors from "../../colors";

const GameBoard = ({ board, selectedBoardCell, selectedColorHex }) => {
    const boardElements = board.flat().map((e, index) => 
        <BoardElement
            isSelected={selectedBoardCell.x + selectedBoardCell.y*7 == index ? true : false}
            colorHex={colors[board.flat()[index]]}
            selectedColorHex={selectedColorHex}
        />
    );

    return (
        <div className="GameBoard">
            {boardElements}
        </div>
    );
}

export default GameBoard;