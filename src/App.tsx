import {Route} from "react-router-dom";
import {HomePage} from "@/pages/HomePage.tsx";
import {AboutPage} from "@/pages/AboutPage.tsx";
import {VansPage} from "@/pages/VansPage.tsx";
import {useLayoutEffect} from "react";
import {VanDetailPage} from "@/pages/VanDetailPage.tsx";
import {MainLayout} from "@/components/MainLayout.tsx";
import {HostDashboard} from "@/pages/host/HostDashboard.tsx";
import {HostIncome} from "@/pages/host/HostIncome.tsx";
import {HostLayout} from "@/pages/host/HostLayout.tsx";
import {HostReviews} from "@/pages/host/HostReviews.tsx";
import {HostVans} from "@/pages/host/vans/HostVans.tsx";
import {HostVanDetail} from "@/pages/host/vans/HostVanDetail.tsx";
import {VanDetails} from "@/pages/host/vans/VanDetails.tsx";
import {VanPricing} from "@/pages/host/vans/VanPricing.tsx";
import {VanPhotos} from "@/pages/host/vans/VanPhotos.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

const setWindowInnerHeightIntoCssVariable = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

const Router = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path={'about'} element={<AboutPage/>}/>

    <Route path={'vans'} element={<VansPage/>} />
    <Route path={'vans/:id'} element={<VanDetailPage/>} />
    {/* or ⬇️ */}
    {/*<Route path={'vans'}>*/}
    {/*  <Route index element={<VansPage/>} />*/}
    {/*  <Route path={':id'} element={<VanDetailPage/>} />*/}
    {/*</Route>*/}

    <Route path={'host'} element={<HostLayout/>}>
      <Route index element={<HostDashboard/>}/>
      <Route path={'income'} element={<HostIncome/>}/>
      <Route path={'reviews'} element={<HostReviews/>}/>
      <Route path={'vans'} element={<HostVans/>}/>
      <Route path={'vans/:id'} element={<HostVanDetail/>}>
        <Route index element={<VanDetails/>}/>
        <Route path={'pricing'} element={<VanPricing/>}/>
        <Route path={'photos'} element={<VanPhotos/>}/>
      </Route>
    </Route>
    <Route path={'*'} element={<NotFoundPage/>} />
  </Route>
));

export const App = () => {

  useLayoutEffect(() => {
    window.addEventListener('resize', setWindowInnerHeightIntoCssVariable);
    setWindowInnerHeightIntoCssVariable();
    return () => {
      window.removeEventListener('resize', setWindowInnerHeightIntoCssVariable);
    }
  }, []);

  return (
    <RouterProvider router={Router}/>
  )
}


