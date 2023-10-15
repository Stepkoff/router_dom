import {useTypedOutletContext} from "@/pages/host/vans/HostVanDetail.tsx";

export const VanDetails = () => {
  const {data, isLoading} = useTypedOutletContext();

  if(isLoading) return null

  return (
    <div>
      {data?.vans.description}
    </div>
  );
};