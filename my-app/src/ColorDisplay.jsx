const ColorDisplay = ({colorValue}) => {
    return (
        <section 
            className='colorDisplay'
            style={{backgroundColor: colorValue}}
        > 
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        </section>

    )
}

ColorDisplay.defaultProps ={
    colorValue: "Empty  Color value"
}
export default ColorDisplay
