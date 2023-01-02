import InputType from "./InputType";
import { ReactComponent as SearchIcon } from '../assets/icons/actions/actions-search.svg';

function SearchbarBusiness({ onSearch, onLocation, onCategory, onInstitution}) {
  return (
    <div className="search-bar">
      <div className="text-wrapper">
        <h1>Search Project</h1>
        <p>Find the detail requests here</p>
      </div>
      <form className="search-wrapper">
        <div className="icon search-icon"><SearchIcon /></div>
        <InputType type={"text"} placeholder={"Input Project Name"} onChange={(e) => onSearch(e.target.value)}/>
      </form>
      <form>
        <div className="filter-wrapper">
          <select id="category" aria-label="Choose category" onChange={(e) => onCategory(e.target.value)} defaultValue="">
            <option value="" disabled>Category</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="System Architecture">System Architecture</option>
            <option value="Web Development">Web Development</option>
            <option value="Commercial">Commercial</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select id="institution" aria-label="Choose institution" onChange={(e) => onInstitution(e.target.value)} defaultValue="">
            <option value="" disabled>Institution</option>
            <option value="Langara">Langara</option>
            <option value="BCIT">BCIT</option>
            <option value="UBC">UBC</option>
            <option value="SFU">SFU</option>
            <option value="KPU">KPU</option>
          </select>
          <select id="location" aria-label="Choose location" onChange={(e) => onLocation(e.target.value)} defaultValue="">
            <option value="" disabled>Location</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Burnaby">Burnaby</option>
            <option value="North Vancouver">North Vancouver</option>
            <option value="Remotely">Remotely</option>
            <option value="Out of BC">Out of BC</option>
          </select>
        </div>
      </form >
    </div>
  )
}

export default SearchbarBusiness