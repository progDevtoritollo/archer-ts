import React from "react";

function TripleTarget(props) {
  const { handleClick } = props;

  return (
    <div className="tripleTarget-container">
      <svg
        contentScriptType="text/ecmascript"
        zoomAndPan="magnify"
        contentStyleType="text/css"
        id="prefix__svg2"
        width="50mm" //      width="160mm"
        xmlSpace="preserve"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 210 210"
        height="50mm" //      height="160mm"
        fillRule="evenodd"
        {...props}
      >
        <defs id="prefix__defs4">
          <style type="text/css" id="style6" xmlSpace="preserve" />
        </defs>
        <g id="prefix__Warstwa_x0020_1" style={{ position: "relative" }}>
          <path
            onClick={handleClick}
            d="M105 45c33.131 0 60 26.868 60 60 0 33.131-26.869 60-60 60-33.132 0-60-26.869-60-60 0-33.132 26.868-60 60-60z"
            id="milk" //id="prefix__path18"
            fill="gray"
            stroke="#000"
            strokeWidth={0.529}
          />
          <path
            onClick={handleClick}
            d="M105 55c27.61 0 50 22.39 50 50s-22.39 50-50 50-50-22.39-50-50 22.39-50 50-50z"
            id="6" //id="prefix__path20"
            fill="#0ff"
            stroke="#000"
            strokeWidth={0.353}
          />
          <path
            onClick={handleClick}
            d="M105 65c22.088 0 40 17.912 40 40s-17.912 40-40 40-40-17.912-40-40 17.912-40 40-40z"
            id="7" //          id="prefix__path22"
            fill="red"
            stroke="#000"
            strokeWidth={0.529}
          />
          <path
            onClick={handleClick}
            d="M105 75c16.566 0 30 13.434 30 30 0 16.566-13.434 30-30 30-16.566 0-30-13.434-30-30 0-16.566 13.434-30 30-30z"
            id="8" // id="prefix__path24"
            fill="red"
            stroke="#000"
            strokeWidth={0.353}
          />
          <path
            onClick={handleClick}
            d="M105 85c11.044 0 20 8.956 20 20s-8.956 20-20 20-20-8.956-20-20 8.956-20 20-20z"
            id="9" // id="prefix__path26"
            fill="#ff0"
            stroke="#000"
            strokeWidth={0.529}
          />
          <path
            onClick={handleClick}
            d="M105 95c5.522 0 10 4.478 10 10s-4.478 10-10 10-10-4.478-10-10 4.478-10 10-10z"
            id="10" //    id="prefix__path28"
            fill="#ff0"
            stroke="#000"
            strokeWidth={0.353}
          />
          <path
            onClick={handleClick}
            d="M105 100a5 5 0 11-.001 10.001A5 5 0 01105 100z"
            id="X" //id="prefix__path30"
            fill="#ff0"
            stroke="#000"
            strokeWidth={0.353}
          />
          <path
            onClick={handleClick}
            d="M105 104v2m1-1h-2"
            id="x2" //  id="prefix__path32"
            fill="none"
            stroke="#000"
            strokeWidth={0.353}
          />
        </g>
      </svg>
    </div>
  );
}

export default TripleTarget;
