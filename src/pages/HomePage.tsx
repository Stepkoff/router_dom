import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Button} from "@/components/ui/button.tsx";

export const HomePage = () => {
  return (
    <div className={'w-full bg-[url("src/assets/images/image-54.jpg")] bg-cover bg-no-repeat bg-center'}>
      <MaxWidthContainer className={'h-full'}>
        <div className={'h-full flex flex-col justify-center'}>
          <h2 className={'text-white font-extrabold text-3xl mb-[22px]'}>
            You got the travel plans, we got the travel vans.
          </h2>
          <p className={'text-white mb-[50px]'}>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <Button className={'bg-[#FF8C38] w-full'}>
            Find your van
          </Button>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

