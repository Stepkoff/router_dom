import {Link, NavLink} from "react-router-dom";
import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import logo from '../../assets/images/logog.png';
import {cn} from "@/lib/utils.ts";
export const Header = () => {
  return (
    <header className={'h-[112px] bg-[#FFF7ED]'}>
      <MaxWidthContainer className={'flex justify-between items-center h-full'}>
        <div>
          <Link to={'/'}>
            <img className={'h-[26px]'} src={logo} alt="logo"/>
          </Link>
        </div>
        <nav className={'flex gap-4'}>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
          }
            to={'/host'}
          >
            Host
          </NavLink>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/about'}
          >
            About
          </NavLink>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/vans'}
          >
            Vans
          </NavLink>
          {/*<NavLink className={'text-[#4d4d4d] font-semibold'} to={'/host'}>Host</NavLink>*/}
          {/*<NavLink className={'text-[#4d4d4d] font-semibold'} to={'/about'}>About</NavLink>*/}
          {/*<NavLink className={'text-[#4d4d4d] font-semibold'} to={'/vans'}>Vans</NavLink>*/}
        </nav>
      </MaxWidthContainer>
    </header>
  );
};
