import {useParams} from "react-router-dom";


export const VanDetailPage = () => {
  const id = useParams();
  console.log(id)

  return (
      <div className={''}>
        Van Details Page
      </div>
  );
};
