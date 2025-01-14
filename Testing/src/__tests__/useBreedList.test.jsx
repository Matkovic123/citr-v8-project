import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedLists from "../useBreedList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("gives an empty list with no animal provided", async () => {
  const { result } = renderHook(() => useBreedLists(""), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});

test("givec back breeds when given an animal", async () => {
  const breeds = [
    "Havanese",
    "Bichon Frise",
    "Poddle",
    "Maltese",
    "Golden Retriever",
    "Labrador",
    "Husky",
  ];

  // next fetch response will be x
  fetch.mockResponseOnce(
    JSON.stringify({
      animal: "dog",
      breeds,
    })
  );

  const { result } = renderHook(() => useBreedLists("dog"), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  await waitFor(() => expect(result.current[1]).toBe("success"));
  const [breedList] = result.current;
  expect(breedList).toEqual(breeds);
});
