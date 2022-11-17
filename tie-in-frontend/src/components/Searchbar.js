import { useState } from "react"
import { useNavigate } from "react-router-dom";
import InputType from "./InputType"

function Searchbar({}) {
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
    </div>
  )
}

export default Searchbar;
