import React from "react";
const Filter=({category,categoryChange})=>{
    const category=[
        {id:"all",name:"All"},
        {id:"28",name:"Action"},
        {Id:"12",name:"Adventure"},
        {id:"16",name:"All"},
        {id:"35",name:"Action"},
        {Id:"80",name:"Adventure"},
        {id:"99",name:"All"},
        {id:"18",name:"Action"},
        {Id:"10751",name:"Adventure"},
        {id:"14",name:"All"},
        {id:"36",name:"Action"},
        {Id:"27",name:"Adventure"},
        {id:"10402",name:"All"},
        {id:"9648",name:"Action"},
        {Id:"10749",name:"Mystery"},
        {id:"878",name:"Romance"},
        {id:"10770",name:"Science Fiction"},
        {Id:"53",name:"TV Movie"},
        {id:"10752",name:"Thriller"},
        {id:"37",name:"War"},
        {Id:"12",name:"western"},
        
    ];
    return(
        <div className="categoryButtons">
            {category.map((category)=>(
                <button key={category.id}
                onClick={()=>categoryChange(category.id,category.name)} 
                className={selectedCategory === category.id?"active":""}> {category.name}</button>
            ))}
        </div>
    );
};
export default Filter;