import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  Movies,
  Popular,
  TopRated,
  NowPlaying,
  Upcoming,
  Movie,
} from './routes';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<Navigate to="/movies/popular" />} index />
            <Route path="movies" element={<Movies />}>
              <Route path="popular" element={<Popular />} />
              <Route path="top-rated" element={<TopRated />} />
              <Route path="now-playing" element={<NowPlaying />} />
              <Route path="upcoming" element={<Upcoming />} />
            </Route>
            <Route path="movie/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
