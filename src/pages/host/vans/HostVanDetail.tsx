import {Link, NavLink, Outlet, useOutletContext, useParams} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import {ResponseSingle, vansApi} from "@/vansApi.ts";

export interface OutletContextSchema {
  data: ResponseSingle | undefined
  isLoading: boolean
}

export const useTypedOutletContext = useOutletContext<OutletContextSchema>

export const HostVanDetail = () => {
  const params = useParams();
  const {data, isLoading} = vansApi.useFetchHostVanByIdQuery(params.id as string);

  return (
    <div>
      {/*<Link relative={'path'} to={'..'} className={'flex w-fit gap-2 mb-6'}><ArrowLeft/> Back to all vans</Link>*/}
      <Link to={'/host/vans'} className={'flex w-fit gap-2 mb-6'}><ArrowLeft/> Back to all vans</Link>
      <div className={'bg-white p-4 rounded-xl mb-6'}>
        {
          isLoading ? <div>Loading...</div> :
            <>
              <div className={'flex gap-4 items-center mb-6'}>
                <img className={'w-40'} src={data?.vans.imageUrl} alt=""/>
                <div>
                  <div className={'inline-block mb-3 bg-orange-600 py-2 px-4 rounded text-white'}>{data?.vans.type}</div>
                  <h6 className={'font-bold text-2xl'}>{data?.vans.name}</h6>
                  <p>${data?.vans.price}/day</p>
                </div>
              </div>
              <nav className={'flex gap-6 font-semibold mb-6'}>

                <NavLink
                  end
                  to={'.'}
                  className={({isActive}) => isActive ? 'underline underline-offset-4' : ''}
                >
                  Details
                </NavLink>

                <NavLink
                  to={'pricing'}
                  className={({isActive}) => isActive ? 'underline underline-offset-4' : ''}
                >
                  Pricing
                </NavLink>

                <NavLink
                  to={'photos'}
                  className={({isActive}) => isActive ? 'underline underline-offset-4' : ''}
                >
                  Photos
                </NavLink>

              </nav>
            </>
        }
        <div>
          <Outlet context={{data, isLoading} satisfies OutletContextSchema } />
        </div>
      </div>
    </div>
  );
};