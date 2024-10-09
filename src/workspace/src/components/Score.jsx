import "../assets/styles/score.css"
function Score({score}) {

    
    const paddedScore = String(score).padStart(8, '0');
    
    return (
        <div className="score">{paddedScore}</div>
    );
}

export default Score