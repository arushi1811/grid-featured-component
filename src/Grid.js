const Grid = ({display, space, issues}) => {
    let feature = require("./images/1.jpg")
    const grid_width = space*0.23
    const grid_height = grid_width*1.29
    const featured_width = space*0.97
    const featured_height = featured_width*1.29
    const both_featured_width = space*0.43
    const both_featured_height = both_featured_width*1.29
    const both_grid_width = space*0.57*0.23
    const both_grid_height = both_grid_width*1.29

    let width1;
    let width2;
    let height1;
    let height2;

    if (display==="featured") {
        width1 = featured_width;
        height1 = featured_height
        width2=0;
        height2=0;
    }

    else if (display==="grid") {
        width1 = 0;
        height1=0;
        width2 = grid_width
        height2 = grid_height
    }
    else {
        width1 = both_featured_width
        height1 = both_featured_height
        width2 = both_grid_width
        height2 = both_grid_height
    }

    console.log(issues[0])
    return (
        <div>
            <div className="content" style={{width:(space)}}>
                <header className="magazine-header" style={{width:(space)}}><h3>ELLE MAGAZINE</h3></header>
                <div className="content-imgs">
                    
                    <div className="main-img">
                        <img src={issues[0]} alt="featured" width={width1} height={height1}/>
                    </div>
                    <div className="imgs">
                    <img width={width2} height={height2} alt="grid" src={issues[0]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[1]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[2]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[3]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[4]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[5]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[6]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[7]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[8]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[9]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[10]}></img>
                    <img width={width2} height={height2} alt="grid" src={issues[11]}></img>
                    </div>
                </div>
                <br/>
                
            </div>
            <div className="img-footer">
                    <p>March 2021</p>
                    <div className="img-footer-btns" style={{width:(space*0.30)}}>
                        <button>Subscribe</button>
                        <button>Archives</button>
                        <button>Renewal</button>
                    </div>
                    <br/>
                </div>
            <div className="signature">
                <h4>Clint Randall</h4>
                <br></br>
                <p>Director of Development</p>
                <p>(480) 448-2241</p>
                <p>Endeavor Business Media</p>
            </div> 
        </div>
    )
}

export default Grid
