import React, {useState,useEffect} from 'react';
import AnswerFrame from './components/AnswerFrame';
import ButtonFrame from './components/ButtonFrame';
import StarsFrame from './components/StarsFrame';
import NumbersFrame from './components/NumbersFrame';
import DoneFrame from './components/DoneFrame';
function Game() {
    const numberOfStars = Math.floor(Math.random()*9)+1;

    const [selectedNumbers,setSelectedNumbers] = useState([]);
    const [noStar,setNoStar] = useState(numberOfStars);
    const [correct,setCorrect] = useState(null);
    const [usedNumbers,setUsedNumbers] = useState([]);
    const [redraws,setReDraws] = useState(5);
    const [doneStatus,setDoneStatus] = useState(null);
    var bottomFrame;

    const onSelectNumber = (clickedNumber)=>{
        setCorrect(null);
        if(selectedNumbers.indexOf(clickedNumber)<0)
            setSelectedNumbers(selectedNumbers.concat(clickedNumber));
    }
    const onUnSelectNumber = (clickedNumber)=>{
        setCorrect(null);
        var indexOfNumber = selectedNumbers.indexOf(clickedNumber);
        selectedNumbers.splice(indexOfNumber,1)
        setSelectedNumbers([...selectedNumbers]);
    }
    const sumOfSelectedNumbers = ()=>{
        return selectedNumbers.reduce(function(p,n){
           return p+n;
        },0);
    }
    const checkAnswer = ()=>{
        setCorrect(noStar === sumOfSelectedNumbers())
    }
    const acceptAnswer = ()=>{
        setUsedNumbers(usedNumbers.concat(selectedNumbers));
        setSelectedNumbers([]);
        setCorrect(null);
        setNoStar(Math.floor(Math.random()*9)+1);
    }
    const onRedraw = ()=>{
        if(redraws>0){
            setNoStar(Math.floor(Math.random()*9)+1);
            setCorrect(null);
            setSelectedNumbers([]);
            setReDraws(redraws-1);
        }
    }
    var possibleCombinationSum = function(arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount ; i++ ) {
            var combinationSum = 0;
            for (var j=0 ; j < listSize ; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };
    const possibleSolutions = ()=>{
        var numberOfStars = noStar, possibleNumbers=[];
        for(var i=1;i<=9;i++){
            if(usedNumbers.indexOf(i)<0){
                possibleNumbers.push(i);
            }
        }
        return possibleCombinationSum(possibleNumbers,noStar);
    }

    const updateDoneStatus = ()=>{
        if(usedNumbers.length === 9){
            setDoneStatus('Game Won!!!!')
            return;
        }
        if(redraws===0 && !possibleSolutions()){
            setDoneStatus('Game Over!!!!')
            return;
        }
    }
    const onResetGame = ()=>{
        setSelectedNumbers([]);
        setNoStar(numberOfStars);
        setCorrect(null);
        setUsedNumbers([]);
        setReDraws(5);
        setDoneStatus(null);
    }

    useEffect(()=>{
        updateDoneStatus();
    },[onRedraw,acceptAnswer])

    if(doneStatus){
        bottomFrame = <DoneFrame doneStatus={doneStatus} resetGame={onResetGame} />;
    }else{
        bottomFrame = <NumbersFrame selectedNumbers={selectedNumbers} clickedNumber={onSelectNumber} usedNumbers={usedNumbers} />;
    }

    return (
        <div className="container">
            <h1> Play Nine </h1>
            <div class="mid">
                <StarsFrame numberOfStars={noStar} />
                <ButtonFrame selectedNumbers={selectedNumbers} correct={correct} checkAnswer={checkAnswer} acceptAnswer={acceptAnswer} onRedraw={onRedraw} redraws={redraws} />
                <AnswerFrame selectedNumbers={selectedNumbers} clickedNumber={onUnSelectNumber} />
                {bottomFrame}
            </div>
        </div>
    );
}

export default Game;
