import { useState } from "react"
import InputType from "./InputType";
import { ReactComponent as SearchIcon } from '../assets/icons/actions/actions-search.svg';


function Searchbar({ onCategory, onSize, onLocation, onSearch, onCheck }) {
  return (
    <div className="search-bar">
      <div className="text-wrapper">
        <h1>Business Project</h1>
        <p>Find the detail requests here</p>
      </div>
      <form className="search-wrapper">
        <div className="icon search-icon"><SearchIcon /></div>
        <InputType type={"text"} placeHolder={"Input Project Name"} onChange={(e) => onSearch(e.target.value)}/>
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
          <select id="size" aria-label="Choose size" onChange={(e) => onSize(e.target.value)} defaultValue="">
            <option value="" disabled>Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
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
      <div className="check-application">
        <input
                      type="checkbox"
                      id="submitted-application"
                      name="submittedApplication"
                      value="Check Submkitted Application"
                      onClick={onCheck}
                  />
                  <label>Check Submitted Application</label>
      </div>

    </div>
  )
}

export default Searchbar;
