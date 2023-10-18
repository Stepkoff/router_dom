import {MaxWidthContainer} from "@/components/MaxWidthContainer.tsx";
import {Link} from "react-router-dom";
import {buttonVariants} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export const NotFoundPage = () => {
  return (
    <MaxWidthContainer>
      <div className={'flex flex-col items-center justify-center h-full'}>
        <p className={'font-bold text-2xl mb-6'}>
          Sorry, the page you were looking for was not found.
        </p>
        <Link to={'/'} className={cn(buttonVariants({variant: 'default'}), 'w-full')}>
          Return to home
        </Link>
      </div>
    </MaxWidthContainer>
  );
};