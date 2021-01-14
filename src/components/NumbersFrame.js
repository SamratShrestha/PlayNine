function NumbersFrame(props){
    var numbers =[],className;
    var selectedNumbers = props.selectedNumbers;
    var clickNumber = props.clickedNumber;
    var usedNumbers = props.usedNumbers;
    for(var i=1;i<=9;i++){
        className = "numbers selected-"+(selectedNumbers.indexOf(i)>=0);
        className += " used-"+(usedNumbers.indexOf(i)>=0);
        numbers.push(
            <div className={className} onClick={clickNumber.bind(null,i)}>{i}</div>
        )
    }
    return(
        <div className="border">
            {numbers}
        </div>
    )
}
export default NumbersFrame;
