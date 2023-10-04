import ColorTile from "./ColorTile";

const ColorBar = ({ colorPalette, selectedColorIndex }) => {
    const colorTileElements = colorPalette.map((e, index) => 
        <ColorTile 
            key={index}
            hex={e}
            index={index}
            selectedColorIndex={selectedColorIndex}
        />
    );

    return (
        <div className="ColorBar">
            { colorTileElements }
        </div>
    );
};

export default ColorBar;
