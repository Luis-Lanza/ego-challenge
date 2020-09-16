import React, { useState, useEffect} from "react";
import "./Sidebar.css";

const Sidebar = ({ width, height, children }) => {
    
    const [xPosition, setX] = useState(width);

    useEffect(() => {
         setX(0);
    }, []);
  
    return (
        <div style={{transition: 'width 1s'}}
            className="side-bar" 
            style={{
                width: width, 
                minHeight: height,
                transform:`translateX(${xPosition}px)`
            }}
        >
            <>
                {children}
            </>
        </div>
    );
};

export default Sidebar;