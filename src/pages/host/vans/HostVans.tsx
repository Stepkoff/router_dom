import {vansApi} from "@/vansApi.ts";
import {Link} from "react-router-dom";

export const HostVans = () => {
  const {data} = vansApi.useFetchHostVansQuery();
  return (
    <div>
      <h4 className={'text-3xl text-[#161616] mb-4 font-bold'}>Your listed vans</h4>
      <div className={'mb-6 flex flex-col gap-4 overflow-hidden rounded-xl'}>
        {data?.vans.map(van => (
          <Link to={van.id} key={van.id} className={'p-4 bg-white flex items-center gap-4'}>
            <div className={'h-[80px] w-[80px]'}><img className={'w-full object-cover h-full'} src={van.imageUrl} alt="van"/></div>
            <div>
              <h6 className={'mb-2 text-[#161616] text-xl font-semibold'}>{van.name}</h6>
              <p className={'text-[#4d4d4d]'}>${van.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};