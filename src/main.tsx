import '../server.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {ThemeProvider} from "@/components/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "@/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<BrowserRouter>*/}
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      {/*</BrowserRouter>*/}
    </Provider>
  </React.StrictMode>,
)



