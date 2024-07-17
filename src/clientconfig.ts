import { QueryClient } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=crash`;

export const fetchFunction = () => {
  const results = fetch(baseUrl).then((results) => {
    return results.json();
  });
  return results;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
