import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useSearchParams} from "react-router-dom";
import {vansApi} from "@/vansApi.ts";

export const VansPage = () => {
  const {isLoading, data} = vansApi.useFetchAllVansQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const links = data?.vans?.reduce((acum:string[], item) => {
    if(!acum.includes(item.type.toLowerCase())) {
      acum.push(item.type.toLowerCase())
    }
    return acum
  }, [])

  const typeFilter = searchParams.get('type');

  const displayedVans = (typeFilter
    ? data?.vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase())
    : data?.vans) || [];

  // for using Link elements (not the best solution)
  // const genNewSearchParamString = (key: string, value: string | null) => {
  //   const sp = new URLSearchParams(searchParams);
  //   if(value === null) {
  //     sp.delete(key);
  //   } else {
  //     sp.set(key, value);
  //   }
  //   return `?${sp.toString()}`;
  // }

  // for using buttons with setSearchParams
  const handleFilterChange = (key:string ,value:string|null) => {
    setSearchParams((prevParams) => {
      if(value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <section className={'w-full'}>
      <MaxWidthContainer>
        <h1 className={'text-3xl font-bold mb-4 text-[#161616]'}>Explore our van options</h1>
        <div className={'flex gap-3 mb-10'}>

          {/* variant with Links and genNewSearchParamString*/}
          {/*{*/}
          {/*  links?.map(link => (*/}
          {/*    <Link*/}
          {/*      className={'px-4 py-2 bg-orange-200 rounded-xl'}*/}
          {/*      key={link}*/}
          {/*      to={genNewSearchParamString('type', link)}*/}
          {/*    >*/}
          {/*      {link}*/}
          {/*    </Link>*/}
          {/*  ))*/}
          {/*}*/}
          {/*<Link className={'px-4 py-2'} to={genNewSearchParamString('type', null)}>Clear Filters</Link>*/}

          {/* variant with buttons and setSearchParams*/}
          {links?.map(link => (
            <Button
              variant={'outline'}
              key={link}
              onClick={() => handleFilterChange('type', link)}
            >
              {link}
            </Button>
          ))}
          <Button variant={'link'} onClick={() => handleFilterChange('type', null)}>
            Clear filter
          </Button>

        </div>
        {isLoading
          ? <div>Loading...</div>
          : <div className={'w-full gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4'}>
              {
                displayedVans.map(van => (
                  <div className={''} key={van.id}>
                    <Link to={`/vans/${van.id}`}>
                      <div className={'overflow-hidden rounded-md mb-3'}>
                        <img className={'w-full h-auto object-cover object-center'} src={van.imageUrl} alt=""/>
                      </div>
                      <div className={'flex justify-between mb-4'}>
                        <h6 className={'max-w-[70%]'}>{van.name}</h6>
                        <span>{van.price}$/day</span>
                      </div>
                      <Button>
                        {van.type}
                      </Button>
                    </Link>
                  </div>
                ))
              }
            </div>
        }
      </MaxWidthContainer>
    </section>
  );
};
