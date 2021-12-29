import './ColorInputBar.css'

const ColorInputBar = ( { newColor, setNewColor, handleSubmit } ) => {
    return (
        <form className='inputBar'>
           
            <input 
                type={ "text" }
                autoFocus
                id='addColor'
                placeholder='Add a color name'
                required
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
            />

        </form>
    )
}

export default ColorInputBar
