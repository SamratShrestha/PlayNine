function AnswerFrame(props){
    const clickNumber = props.clickedNumber;
    var selectedNumbers = props.selectedNumbers.map((number)=>{
        return(
        <div className="numbers" onClick={clickNumber.bind(null,number)} >
            {number}
        </div>
        )
    })
    return(
        <div id="answer">
            <div className="border">
                {selectedNumbers}
            </div>
        </div>
    )
}
export default AnswerFrame;
