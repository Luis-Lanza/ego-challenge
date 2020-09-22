import React from "react";
import "./Sidebar.css";

// , { useState, useEffect}

const Sidebar = ({ width, height, children }) => {
    
    // const [xPosition, setX] = useState(width);

    // useEffect(() => {
    //      setX(0);
    // }, []);
  
    return (
        <div
            className="example" 
            // style={{
            //     width: width, 
            //     minHeight: height,
            //     transform:`translateX(${xPosition}px)`,
            //     transition: `${width} 1s`
            // }}
        >
            <>
                {children}
            </>
        </div>
    );
};

export default Sidebar;

// Menu*
//  Sidebar
//   Children
// onClick -> toggleOpen (hook)
//  openSidebar = () => {render Sidebar}
// isOpen -> renders Sidebar
// 