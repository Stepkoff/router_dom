import {NavLink, Outlet} from "react-router-dom";
import {cn} from "@/lib/utils.ts";
import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";

export const HostLayout = () => {
  return (
    <div className={'w-full'}>
      <MaxWidthContainer>
        <nav className={'flex gap-4 mb-6'}>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/host'}
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/host/income'}
          >
            Income
          </NavLink>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/host/vans'}
          >
            Vans
          </NavLink>
          <NavLink
            className={({isActive}) => isActive
              ? cn('text-black underline underline-offset-4 font-semibold')
              : cn('text-[#4d4d4d] font-semibold')
            }
            to={'/host/reviews'}
          >
            Reviews
          </NavLink>

        </nav>
        <Outlet/>
      </MaxWidthContainer>
    </div>
  );
};