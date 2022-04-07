import React from "react";
import useSWR from "swr";

const mediastackURL = "http://api.mediastack.com/v1/news?access_key=";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// This fetch will work as written *if* the env variable is prepended with "NEXT_PUBLIC_" to expose it to the browser; better to send the access key as part of the req header if possible (todo)
// *** move this fetch to the server ***

export default function MediastackAPI() {
  const { data, error } = useSWR(
    `${mediastackURL}${process.env.MEDIASTACK_ACCESS_KEY}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello bookmark {data.pagination.limit}!</div>;
}
