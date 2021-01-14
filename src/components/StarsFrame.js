import star from '../star.png';
function StarsFrame(props){
    var numberOfStars = props.numberOfStars;
    var stars= [];
    for(var i=0;i<numberOfStars;i++){
        stars.push(
                <img src={star} alt="star" />
        )
    }
    return(
        <div id="stars">
            <div className="border">
                {stars}
            </div>
        </div>
    )
}
export default StarsFrame;
