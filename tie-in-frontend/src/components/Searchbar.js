import { useState } from "react"
import { useNavigate } from "react-router-dom";
import InputType from "./InputType";
import { ReactComponent as SearchIcon } from '../assets/icons/actions/actions-search.svg';


function Searchbar({onSelectChange}) {
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState([]);
  const onChange = (e) => setFilter({selectValue:e.target.value});


  const history = useNavigate();
  const onSearch = (e) => {
    setTerm(e.target.value)
  }
  const submitHandle = () => {
    history(`/search?q=${term}`, { replace: true });
  }
  return (
    <div className="search-bar">
      <div className="text-wrapper">
        <h1>Business Project</h1>
        <p>Find the detail requests here</p>
      </div>
      <form className="search-wrapper" onSubmit={submitHandle}>
      <div className="icon search-icon" onClick={submitHandle}><SearchIcon /></div>
        <InputType type={"text"} placeHolder={"Input Project Name"} onChange={onSearch} />
      </form>
      <form onSubmit={onChange} className="filter-wrapper">
        <select id="category" aria-label="Choose category" onChange={(e) => onSelectChange(e.target.value)} value={filter}>
          <option selected value="" disabled>Category</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="System Architecture">System Architecture</option>
          <option value="Web Development">Web Development</option>
          <option value="Commercial">Commercial</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select id="size" aria-label="Choose size" value={filter}>
          <option selected value="" disabled>Size</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select id="location" aria-label="Choose location" value={filter}>
          <option selected value="" disabled>Location</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Burnaby">Burnaby</option>
          <option value="North Vancouver">North Vancouver</option>
          <option value="Remotely">Remotely</option>
          <option value="Out of BC">Out of BC</option>
        </select>
      </form >
    </div>
  )
}

export default Searchbar;
