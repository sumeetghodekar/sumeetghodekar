import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";



const App= () => 
(
    <>
        <h1 className="heading_style">Highly Rated Movies, You should not MISS OUT this </h1>
        {Sdata.map((val,index) => {
            console.log(index);

            return(
                <Card
                key={val.id}
                imgsrc={val.imgscr}
                title={val.title}
                sname={val.sname}
                link={val.links}
                />
            );


        })}
    
    </>
)

export default App;