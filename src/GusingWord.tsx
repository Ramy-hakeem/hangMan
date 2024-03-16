import useStore from "./useStore"
function GusingWord() {
    const { word } = useStore();
    const { wordParts } = useStore()
    return (
        <div className='word'>
            <div>
                {
                    word.split("").map((ele, index) => (
                        <span key={index} className='word1'>
                            <span style={{ visibility: wordParts[index] }}>
                                {ele}
                            </span>
                        </span>
                    ))
                }
            </div>

        </div>
    )
}

export default GusingWord