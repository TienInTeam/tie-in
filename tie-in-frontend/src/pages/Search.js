import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { requestBusinessProjectsByQuery } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  console.log(query);


  const request = useQuery(["businessProject"], () => requestBusinessProjectsByQuery(query),
    {
      onError: (error) => {
        alert(error.message);
      }
    },
    { enabled: !!query }
  );

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  const onCheckStatus = () => {
    alert("Check status is clicked")
  }
  const navigate = useNavigate()
  const onBack = () => {
    navigate("/businessprojectslist")
  }
  return (
    <div className="search">
      <div className="icon back-icon" onClick={onBack}><BackIcon /></div>
      <h2>Projects Including "{query}"</h2>
      {
        request.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
    </div>
  )
}

export default Search