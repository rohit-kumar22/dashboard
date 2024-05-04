import "./dashboard.css";
import wallpaper from "./images/wallpaper.png";
import { useState, useEffect } from "react";
import FileFolderHandler from "./outlets/FileFolderHandler";
import TimeAndDate from "./outlets/TimeAndDate";
import folder from "./images/folder.png"
import file from './images/file.png'
import { displayData } from "./data/displayData";

export default function Dashboard() {
  const [menuPosition, setMenuPosition] = useState(null);
  const [data, setData] = useState([])
  const [apps, setApps] = useState(displayData.apps)


  const handleCloseContextMenu = () => {
    if (menuPosition?.visible) {
        setMenuPosition({ ...menuPosition, visible: false });
    }
  };

  const handleMenuPosition = (event) => {
    event.preventDefault();
    setMenuPosition({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="dashboard-container">
      <div
        style={{ background: `url(${wallpaper})`, backgroundSize: "cover"}}
        className="image-container"
        onContextMenu={handleMenuPosition}
        onClick={handleCloseContextMenu}
      >
        <div className="utilities-container">
          {displayData.utilities.map((item, index) => (
            <img key={index} src={item.icon} alt={item.alt} />
          ))}
        </div>
        <div className="time-date">
        <TimeAndDate/>
        </div>
        <FileFolderHandler menuPosition={menuPosition} setMenuPosition={setMenuPosition} data={data} setData={setData} apps={apps} setApps={setApps}/>
        <div className="apps-container">
          {apps?.map((app, index) => (
            <img key={index} src={app.icon} alt={app.alt} className="app" />
          ))}
        </div>
      </div>
      <div style={{display:"flex", gap:"15px", padding: "15px 20px 0 20px"}}>
        {data?.length > 0 && data.map((item)=>(
            <div>
                <img style={{width:"30px", height:"30px"}} src={item.type === "folder" ? folder : file} alt=""></img>
                <p style={{margin: 0}}>{item.name}</p>
                </div>
        ))}
      </div>
    </div>
  );
}
