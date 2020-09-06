import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const App = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // change mobile state on resize
    window.onresize = (e) =>
      e.target.window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);

    // set mobile state initially
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  if (isMobile && currentElement) {
    return (
      <div className="d-flex-row">
        <Content
          currentElement={currentElement}
          setCurrentElement={setCurrentElement}
        />
      </div>
    );
  }

  if (isMobile && !currentElement) {
    return (
      <div className="d-flex-row">
        <Sidebar setState={setCurrentElement} />
      </div>
    );
  }

  return (
    <div className="d-flex-row">
      <Sidebar setState={setCurrentElement} />
      <Content
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
    </div>
  );
};

export default App;
