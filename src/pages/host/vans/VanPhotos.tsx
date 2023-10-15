import {useTypedOutletContext} from "@/pages/host/vans/HostVanDetail.tsx";

export const VanPhotos = () => {
  const {data, isLoading} = useTypedOutletContext();

  if(isLoading) return null
  return (
    <div>
      <img className={'w-52 h-52 object-cover'} src={data?.vans.imageUrl} alt=""/>
    </div>
  );
};