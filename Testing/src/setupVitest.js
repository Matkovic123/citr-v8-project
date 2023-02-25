import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

// mocks all fetch requests in test suite
// identical package exists for jest
const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();
