import "./dashboard.css";
import wallpaper from "./images/wallpaper.png";
import { useState, useEffect} from "react";
import FileFolderHandler from "./outlets/FileFolderHandler";
import TimeAndDate from "./outlets/TimeAndDate";
import folder from "./images/folder.png";
import logo from "./images/logo.png";
import { displayData } from "./data/displayData";

export default function Dashboard() {
  const [menuPosition, setMenuPosition] = useState(null);
  const [data, setData] = useState([]);
  const [apps, setApps] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null)
  const [files, setFiles] = useState(null);

  const handleCloseContextMenu = () => {
    if (menuPosition?.visible) {
      setMenuPosition({ ...menuPosition, visible: false });
    }
  };

  useEffect(()=>{
    setApps(displayData.apps);
    setFiles(displayData.files)
  },[])

  const handleMenuPosition = (event) => {
    event.preventDefault();
    setMenuPosition({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="dashboard-container"
    style={{ background: `url(${wallpaper})`, backgroundSize: "100% 100%" }}
    >
      <div
        className="image-container"
        onContextMenu={handleMenuPosition}
        onClick={handleCloseContextMenu}
      >
        <div className="utilities-container">
          {displayData.utilities.map((item, index) => (
            <img className="icons" key={index} src={item.icon} alt={item.alt} />
          ))}
        </div>
        <div className="time-date">
          <TimeAndDate />
        </div>
        <FileFolderHandler
          menuPosition={menuPosition}
          setMenuPosition={setMenuPosition}
          data={data}
          setData={setData}
          apps={apps}
          setApps={setApps}
        />
        <div className="apps-container">
          {apps?.map((app, index) => (
            <img key={index} src={app.icon} alt={app.alt} className="app" />
          ))}
        </div>
      </div>
      <div
        className="memory-container"
      >
        <div style={{display:"flex", gap:"15px"}}>
        {data?.length > 0 &&
          data.map((item, index) => (
            <div className="file-container" key={index}
            onMouseEnter={()=>setHoveredItem(index)}
            onMouseLeave={()=> setHoveredItem(null)}
            >
              <div className="tooltip bubble-bottom-left" style={{display: index===hoveredItem ? "block": "none"}}>
                <div className="bubble ">
                  <div className="content">
                    <h3 style={{marginBottom:"0px"}}>Hello!</h3>
                    <p style={{padding: "0px 10px 0 10px", margin: "0px"}}>What are you looking for?</p>
                  </div>
                </div>
              </div>
              <img
                className="file-size"
                src={item.type === "folder" ? folder : files[item.type].icon}
                alt=""
              ></img>
              <p className="file-name">{item.name}</p>
            </div>
          ))}
          </div>
        <img className="file-size" id="logo" src={logo} alt={logo} />
      </div>
    </div>
  );
}
