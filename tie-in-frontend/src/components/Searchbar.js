import { useState } from "react"
import InputType from "./InputType"

function Searchbar({onSubmit}) {
  const [term, setTerm] = useState("")

  const onSearch= (e) => {
    setTerm(e.target.value)
  }
  const onSubmit= (e) => {
    e.prevent.default()
    history.push(`search?q=${term}`)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
       <InputType type={"text"} placeHolder={"Input Project Name"} onChange={onSearch}/>
      </form>
    </div>
  )
}

export default Searchbar;
