import {ThemeToggle} from '@/components/ThemeToggle.tsx';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/pages/HomePage.tsx";
import {AboutPage} from "@/pages/AboutPage.tsx";
import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
import {VansPage} from "@/pages/VansPage.tsx";
import {useLayoutEffect} from "react";
import '../server.js';
import {VanDetailPage} from "@/pages/VanDetailPage.tsx";

const setWindowInnerHeightIntoCssVariable = () => {
  const doc = document.documentElement
  doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

export const App = () => {
  useLayoutEffect(() => {
    window.addEventListener('resize', setWindowInnerHeightIntoCssVariable);
    setWindowInnerHeightIntoCssVariable();
    return () => {
      window.removeEventListener('resize', setWindowInnerHeightIntoCssVariable);
    }
  }, []);

  return (
    <div className={'min-h-app flex flex-col font-Inter '}>
      <Header/>
      <main className={'bg-[#fff7ed] flex flex-1'}>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/vans'} element={<VansPage/>}/>
          <Route path={'/vans/:id'} element={<VanDetailPage/>}/>
        </Routes>
      </main>
      <Footer/>
      <ThemeToggle/>
    </div>
  )
}


