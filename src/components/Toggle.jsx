import { useState } from "react";
function Toggle(props){
const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    
}

    return(
        <div className="toggle">
<h1 onClick={() => handleToggle()}>
  {props.title} <span>
    <i class={`fa-solid fa-chevron-${isOpen === false ? 'down' : 'up'}`}></i></span>
</h1>           <div className={`toggle-text ${isOpen === false ? '' : 'open'}`}>

            {props.children}
             </div>
        </div>
    )
}

export default Toggle;