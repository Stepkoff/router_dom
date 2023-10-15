import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Button} from "@/components/ui/button.tsx";

export const AboutPage = () => {
  return (
    <div className={'w-full'}>
      <img className={'block w-full mb-12'} src={'/assets/images/image_5512.jpg'} alt=""/>
      <MaxWidthContainer>
        <section>
          <h3 className={'text-[#161616] font-bold text-3xl mb-8'}>
            Don’t squeeze in a sedan when you could relax in a van.
          </h3>
          <p className={'mb-4'}>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <p className={'mb-[55px]'}>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>

          <div className={'bg-[#FFCC8D] p-9 rounded-md mb-[55px]'}>
            <h6 className={'font-bold text-2xl'}>Your destination is waiting.</h6>
            <h6 className={'font-bold text-2xl'}>Your van is ready.</h6>
            <Button className={'mt-6'}>
              Explore our vans
            </Button>
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
};
