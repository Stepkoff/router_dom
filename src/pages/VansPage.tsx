import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export interface Van {
  description: string,
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  type: string
}

export const VansPage = () => {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect (() => {
    fetch('/api/vans')
      .then(response => response.json())
      .then((data) => {
        setVans(data.vans)
      })

  }, []);

  return (
    <section className={'w-full'}>
      <MaxWidthContainer>
        <h2 className={'text-3xl font-bold mb-4 text-[#161616]'}>Explore our van options</h2>
        <div className={'flex gap-3 mb-10'}>
          <Button className={'bg-[#FFEAD0] border-none'} variant={'outline'}>Simple</Button>
          <Button className={'bg-[#FFEAD0] border-none'} variant={'outline'}>Simple</Button>
          <Button className={'bg-[#FFEAD0] border-none'} variant={'outline'}>Simple</Button>
          <Button className={''} variant={'link'}>Clear Filters</Button>
        </div>
        <div className={'w-full gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4'}>
          {
            vans.map(van => (
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
      </MaxWidthContainer>
    </section>
  );
};
