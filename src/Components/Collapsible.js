import React, {useState, useRef} from "react";
import propTypes from "prop-types";
const Collapsible = ({title, children}) => {
  const [ isExpanded, setIsExpanded ] = useState(false)
  const [ infoHeight, setInfoHeight ] = useState(0)
  const innerElement = useRef(null);
  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded)
    setInfoHeight(innerElement.current.clientHeight)
  };
    const currentHeight = isExpanded ? infoHeight : 0;
    return (
      <div
        className={`article ${isExpanded ? " expanded" : ""}`}
        onClick={e => handleToggle(e)}
      >
        <div className="articleTitle">
          <h2>{title}</h2>
            <i className={`fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
        </div>
        <div
          className="articleCollapse"
          style={{ height: `${currentHeight}px` }}
        >
          <div ref={innerElement} className="articleInfo">
            {children}
          </div>
        </div>
      </div>
    );
}
Collapsible.propTypes = {
  title: propTypes.string
};
export default Collapsible;
