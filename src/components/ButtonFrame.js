import redraw from '../redraw.png';
const ButtonFrame = ({selectedNumbers,correct,checkAnswer,acceptAnswer,onRedraw,redraws}) => {
    var button;
    switch(correct){
        case true:
            button = (
                <button className="btn btn-success" onClick={acceptAnswer}>Yes</button>
            )
            break;
        case false:
            button = (
                <button className="btn btn-danger">No</button>
            )
            break;
        default:
            var disabled = (selectedNumbers.length === 0);
            button = (
                <button className="btn" disabled={disabled} onClick={checkAnswer} >=</button>
            )

    }
    return(
        <div id="button">
            {button}
            <button class="btn" onClick={onRedraw} disabled={redraws === 0}>
                <img src={redraw} alt="redraw" />
                &nbsp;
                <span>{redraws}</span>
            </button>
        </div>
    )
}
export default ButtonFrame;
