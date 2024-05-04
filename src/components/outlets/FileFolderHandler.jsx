import './fileFolder.css'
import config from "../config.json";
import { useState, useEffect } from "react";
import folder from '../images/folder.png';
import file from '../images/file.png'

export default function FileFolderHandler({ menuPosition, setMenuPosition, data, setData, apps, setApps }) {
    const [isModalOpen, setIsModalOpen] = useState({visibility:false, type:""});
  const [suboptions, setSubOptions] = useState({visibility: false, Options:[]});
  const [name, setName]= useState("")

  useEffect(() => {
    if (!menuPosition?.visible) {
        setSubOptions({visibility:false});
    }
  }, [menuPosition]);

  const hanldeAdd = (event, item, extension) => {
    event.stopPropagation();
    if(item.type==="app"){
        setApps([...apps, {icon: item.icon, alt: item.alt}])
    }
    else{
    setIsModalOpen({visibility: true, type:item.type, extension: extension ? extension : ""});
    }
    setSubOptions({visibility:false});
    setMenuPosition({...menuPosition, visible: false})

  };

const handleAddFolder=(structure)=>{
    if(structure.extension.length > 0){
        setData([...data, {type: structure.type,name: name+structure.extension,}])
    }
else {setData([...data, {type: structure.type,name: name}])}
setName("");
setIsModalOpen(false)
}

const handleSubOptions=(mainOption,event)=>{
    event.stopPropagation();
setSubOptions({visibility: true, options:mainOption.subOptions })
}

  return (
    <div>
      {menuPosition?.visible && (
        <ul
          className="context-menu"
          style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
        >
          {config.contextMenu.map((item) => (
            <li
              key={item.name}
              onClick={(e) => {
                item.name !== "Add Folder"
                  ? handleSubOptions(item,e)
                  : hanldeAdd(e, item);
              }}
            >
              {item.name !== "Add Folder" ? item.name + "    >" : item.name}
              {suboptions?.visibility && item.subOptions ? (
                <ul className="nested-menu">
                  {suboptions.options.map((sub) => (
                    <li key={sub.name} onClick={(e)=>hanldeAdd(e,sub,sub.extension)}>{sub.name}</li>
                  ))}
                </ul>
              ) : (
                <div />
              )}
            </li>
          ))}
        </ul>
      )}
      {isModalOpen?.visibility && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Enter {isModalOpen.type} Name</p>
                        <img className='folder-image' src={isModalOpen.type === "folder" ? folder : file} alt="folder"/>
                        <input type="text" placeholder={`Enter ${isModalOpen.type} Name..`} onChange={(e)=>{setName(e.target.value)}}/>
                        <button disabled={name.length<1} onClick={()=>handleAddFolder(isModalOpen)}>Done</button>
                    </div>
                </div>
            )}
    </div>
  );
}
