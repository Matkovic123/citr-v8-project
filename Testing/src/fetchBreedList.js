const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    // react query requires throwing error if api call fails
    throw new Error(`details/${animal} not ok`);
  }

  return apiRes.json(); // return a promise to query
};

export default fetchBreedList;
