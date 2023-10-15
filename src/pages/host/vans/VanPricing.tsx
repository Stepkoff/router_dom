import {useTypedOutletContext} from "@/pages/host/vans/HostVanDetail.tsx";

export const VanPricing = () => {
  const {data, isLoading} = useTypedOutletContext();

  if(isLoading) return null

  return (
    <div>
      ${data?.vans.price}/day
    </div>
  );
};