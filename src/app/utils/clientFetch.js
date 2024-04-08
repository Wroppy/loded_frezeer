export const postFetch = async (url, body) => {
  const res = await fetch(`/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res;
};

export const fetchData = async (url, body) => {
  try {
    const res = await postFetch(url, body);
    return await res.json();
  } catch {
    return { success: false, error: "An error occurred in the client" };
  }
};
