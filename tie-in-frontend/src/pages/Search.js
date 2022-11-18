import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { requestBusinessProjectsByQuery, requestBusinessProjects } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";

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
  console.log(request.data, 'in request data e');

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  const onCheckStatus = () => {
    alert("Check status is clicked")
  }

  return (
    <div className="search">
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