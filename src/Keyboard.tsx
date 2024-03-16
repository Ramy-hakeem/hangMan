import useStore from "./useStore";

function Keyboard() {
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'
        , 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const { guessing } = useStore()
    return (

        <div className="keyboardContainer">
            {chars.map((ele, index) => (
                <div key={index} className="keyboard" >
                    <div onClick={() => guessing(ele)} key={ele} className="key">{ele}</div>
                </div>
            ))}
        </div>




    )
}

export default Keyboard