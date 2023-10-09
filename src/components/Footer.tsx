import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";

export const Footer = () => {
  return (
    <footer className={'h-[75px] font-Inter text-[14px] flex items-center bg-[#252525]'}>
      <MaxWidthContainer>
        <p className={'flex items-center text-[#AAA]'}><span className={'text-2xl'}>&#169;</span> 2022 #VANLIFE</p>
      </MaxWidthContainer>
    </footer>
  );
};
