import { useState } from "react"
import { useNavigate } from "react-router-dom";
import InputType from "./InputType"

function Searchbar({onCategory, onSize, onLocation}) {
  const [term, setTerm] = useState("");
  

  const history = useNavigate();
  const onSearch= (e) => {
    setTerm(e.target.value)
  }
  const submitHandle= () => {
    history(`/search?q=${term}`, {replace: true });
  }
  return (
    <div>
      <form onSubmit={submitHandle}>
       <InputType type={"text"} placeHolder={"Input Project Name"} onChange={onSearch}/>
      </form>
            <select id="category" aria-label="Choose category" onChange={onCategory}>
                <option selected disabled>Category</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="System Architecture">System Architecture</option>
                <option value="Web Development">Web Development</option>
                <option value="Commercial">Commercial</option>
                <option value="Marketing">Marketing</option>
            </select>
            <select id="size" aria-label="Choose size" onChange={onSize}>
                <option selected disabled>Location</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <select id="location" aria-label="Choose location" onChange={onLocation}>
                <option selected disabled>Size</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Burnaby">Burnaby</option>
                <option value="North Vancouver">North Vancouver</option>
                <option value="Remotely">Remotely</option>
                <option value="Out of BC">Out of BC</option>
            </select>
    </div>
  )
}

export default Searchbar;
