import {Link, useLocation, useParams} from "react-router-dom";
import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {vansApi} from "@/vansApi.ts";

export const VanDetailPage = () => {
  const params = useParams();
  const {data} = vansApi.useFetchVanQuery(params?.id as string);
  const location = useLocation();
  const type = new URLSearchParams(location.state?.search || '').get('type')

  return (
    <>
      {data?.vans ?
        <section>
          <MaxWidthContainer>
            <Link
              className={'flex mb-4 gap-3 items-center hover:underline underline-offset-4'}
              to={`..${location.state?.search || ''}`}
              relative={'path'}
            >
              <ArrowLeft/>Back to {type || 'all'} vans
            </Link>
            <div className={'mb-8'}>
              <img className={'w-full rounded-xl object-cover h-full md:w-1/2'} src={data.vans?.imageUrl} alt="van"/>
            </div>
            <Button className={'mb-4'}>
              {data.vans?.type}
            </Button>
            <h3 className={'mb-4'}>
              {data.vans?.name}
            </h3>
            <div className={'mb-4'}>${data.vans?.price}/day</div>
            <p className={'mb-4'}>
              {data.vans?.description}
            </p>
            <Button className={'mb-12 bg-[#FF8C38]'}>Rent this van</Button>
          </MaxWidthContainer>
        </section>
        : <MaxWidthContainer>Loading...</MaxWidthContainer>}
    </>
  );
};
