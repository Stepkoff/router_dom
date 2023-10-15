import {Outlet} from 'react-router-dom';
import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
export const MainLayout = () => {


  return (
    <div className={'min-h-app flex flex-col font-Inter '}>
      <Header/>
      <main className={'bg-[#fff7ed] flex flex-1 w-full'}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};