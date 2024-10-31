import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/view/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { Reducer } from './store/reducer.ts'
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: Reducer,
  middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

