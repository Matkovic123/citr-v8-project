const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    // react query requires throwing error if api call fails
    throw new Error(`details/${id} not ok`);
  }

  return apiRes.json(); // return a promise to query
};

export default fetchPet;
