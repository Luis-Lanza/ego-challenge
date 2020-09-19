import React, { useState, useEffect} from "react";
import "./Sidebar.css";

const Sidebar = ({ width, height, children }) => {
    
    const [xPosition, setX] = useState(width);

    useEffect(() => {
         setX(0);
    }, []);
  
    return (
        <div
            className="side-bar" 
            style={{
                width: width, 
                minHeight: height,
                transform:`translateX(${xPosition}px)`,
                transition: `${width} 1s`
            }}
        >
            <>
                {children}
            </>
        </div>
    );
};

export default Sidebar;