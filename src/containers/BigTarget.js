import React from "react";

function BigTarget(props) {
  const { handleClick } = props;

  return (
    <svg
      contentScriptType="text/ecmascript"
      zoomAndPan="magnify"
      contentStyleType="text/css"
      id="prefix__svg2"
      width="80mm" //      width="160mm"
      xmlSpace="preserve"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 210 210"
      height="80mm" //      height="160mm"
      fillRule="evenodd"
      fill="gray"
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
          d="M105 5c55.219 0 100 44.78 100 100 0 55.219-44.781 100-100 100C49.78 205 5 160.219 5 105 5 49.78 49.781 5 105 5h0z"
          id="1"
          fill="#fff"
          stroke="#000"
          // strokeWidth={0.529}
          strokeWidth={12}
        />
        <path
          onClick={handleClick}
          d="M105 15c49.697 0 90 40.303 90 90s-40.303 90-90 90-90-40.303-90-90 40.303-90 90-90h0z"
          id="2" //id="prefix__path12"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.353}
        />
        <path
          onClick={handleClick}
          d="M105 25c44.175 0 80 35.825 80 80s-35.825 80-80 80-80-35.825-80-80 35.825-80 80-80h0z"
          id="3" //  id="prefix__path14"
          fill="#000"
          stroke="#000"
          strokeWidth={0.529}
        />
        <path
          onClick={handleClick}
          d="M105 35c38.653 0 70 31.347 70 70s-31.347 70-70 70-70-31.347-70-70 31.347-70 70-70z"
          id="4" //  id="prefix__path16"
          fill="#000"
          stroke="#fff"
          strokeWidth={0.353}
        />
        <path
          onClick={handleClick}
          d="M105 45c33.131 0 60 26.868 60 60 0 33.131-26.869 60-60 60-33.132 0-60-26.869-60-60 0-33.132 26.868-60 60-60z"
          id="5" //id="prefix__path18"
          fill="#0ff"
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
  );
}

export default BigTarget;
