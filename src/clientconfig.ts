import { QueryClient } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&page=`;

export const fetchFunction = async (
  pageParam: number = 1,
  queryString: string
) => {
  const results = await fetch(baseUrl + pageParam + queryString);
  return results.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
