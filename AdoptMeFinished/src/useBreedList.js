import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  if(results.isError) {
    return new Error('Fetching breeds failed', results.error)
  }
  return [results?.data?.breeds ?? [], results.status] ;
}
