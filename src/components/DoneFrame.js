const DoneFrame = ({doneStatus,resetGame})=>{
    return(
        <div class="border">
            <h2>{doneStatus}</h2>
            <button className="btn-again" onClick={resetGame}>Play Again </button>
        </div>
    )
}
export default DoneFrame;
