import battery from "../images/battery.png"
import calender from "../images/calender.png"
import chrome from "../images/chrome.png"
import fileExplorer from "../images/fileExplorer.png"
import wifi from "../images/wifi.png"
import volume from "../images/volume.png"
import recyclebin from "../images/recyclebin.png"
import wordIcon from "../images/wordIcon.png"
import powerpointIcon from "../images/powerpointIcon.png"
import excelIcon from "../images/excelIcon.png"

export const displayData = {
utilities:[
    {icon: wifi, alt:"wifi"},
    {icon: volume, alt:"volume"},
    {icon: battery, alt:"battery"},
],
apps:[
    {icon: fileExplorer, alt:"file explorer"},
    {icon: chrome, alt:"chrome"},
    {icon: recyclebin, alt:"recyclebin"},
    {icon: calender, alt:"calender"}  
],
files:{
    word: {
        icon: wordIcon, alt:"word"
    },
    excel: {
        icon: excelIcon, alt:"excel"
    },
    powerpoint: {
        icon: powerpointIcon, alt:"powerpoint"
    }
}
}