import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
    onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  });


  return (
  <div className="w-48 relative">
  <Panel className="flex justify-between items-center cursor-pointer"
   onClick={clickHandler}>{value?.label || 'Select...' }
   <TiArrowSortedDown className="text-lg"/>
   </Panel>
  {isOpen && <Panel className="absolute top-full" >{renderedOptions}</Panel>}
  </div>
)}

export default Dropdown;
