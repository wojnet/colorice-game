const BoardElement = ({ isSelected, colorHex, selectedColorHex }) => {
    const selectedStyle = {
        outline: `3px solid ${selectedColorHex}`,
        zIndex: 100,
        background: `${colorHex}BB`
    }

    return (
        <div className="BoardElement" style={isSelected ? selectedStyle : { background: colorHex }}></div>
    );
}

export default BoardElement;