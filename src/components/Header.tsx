import {Link} from "react-router-dom";
import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";

export const Header = () => {
  return (
    <header className={'h-[112px] bg-[#FFF7ED]'}>
      <MaxWidthContainer className={'flex justify-between items-center h-full'}>
        <div>
          <Link to={'/'}>
            <img className={'h-[26px]'} src="src/assets/images/logog.png" alt="logo"/>
          </Link>
        </div>
        <nav className={'flex gap-4'}>
          <Link className={'text-[#4d4d4d] font-semibold'} to={'/about'}>About</Link>
          <Link className={'text-[#4d4d4d] font-semibold'} to={'/vans'}>Vans</Link>
        </nav>
      </MaxWidthContainer>
    </header>
  );
};
