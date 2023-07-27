import React from "react";
const Buttons=({category,categoryChange})=>{
    return(
        <div className="categoryButtons">
            <button className={category==="all"?"active":"inactive"}
            onClick={()=>categoryChange("all")}
            >
                All
            </button>
            <button className={category==="28"?"active":"inactive"}
            onClick={()=>categoryChange("28")}> Action</button>
             <button className={category==="35"?"active":"inactive"}
            onClick={()=>categoryChange("35")}>Comedy </button>
             <button className={category==="16"?"active":"inactive"}
            onClick={()=>categoryChange("16")}>Animation </button>



        </div>
    );
};
export default Buttons;