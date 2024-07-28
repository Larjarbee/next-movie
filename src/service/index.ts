const baseUrl = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmUyZDhhNjZhMjE3NjQ5MmZmYWZkOGJlMmFiNDI0ZSIsIm5iZiI6MTcyMjA3MDM1Ni4wMzk5NjQsInN1YiI6IjYzNDJhZDA3NzFmZmRmMDA3ZmFmZTllNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3LSRa-F9_2d2GLk-V7B1BHeDBeBpFjnuJjnptoiZkM",
  },
};

export const fetchAPI = async (query: string) => {
  const res = await fetch(`${baseUrl}/${query}`, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
