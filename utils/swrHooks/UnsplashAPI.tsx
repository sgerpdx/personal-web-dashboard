import React from "react";
import useSWR from "swr";

const unsplashURL = "https://api.unsplash.com/photos/random/?client_id=";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// This fetch will work as written *if* the env variable is prepended with "NEXT_PUBLIC_" to expose it to the browser; better to send the access key as part of the req header if possible (todo)

export default function UnsplashAPI() {
  const { data, error } = useSWR(
    `${unsplashURL}${process.env.UNSPLASH_ACCESS_KEY}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello bookmark {data.color}!</div>;
}
