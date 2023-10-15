import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Link} from "react-router-dom";
export const HomePage = () => {
  return (
    <div className={'homepage bg-cover bg-no-repeat bg-center w-full'}>
      <MaxWidthContainer className={'h-full'}>
        <div className={'h-full flex flex-col justify-center'}>
          <h2 className={'text-white font-extrabold text-3xl mb-[22px]'}>
            You got the travel plans, we got the travel vans.
          </h2>
          <p className={'text-white mb-[50px]'}>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <Link className={'bg-[#FF8C38] h-10 px-4 py-2 text-center text-primary-foreground rounded hover:bg-[#FF8C38]/80'} to={'/vans'}>
            Find your van
          </Link>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

