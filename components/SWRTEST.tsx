import React from "react";
import useSWR from "swr";

const planetURL = "https://codelon-5-server.herokuapp.com/api/v1/planets";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SWRTEST() {
  const { data, error } = useSWR(
    "https://codelon-5-server.herokuapp.com/api/v1/planets",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello planet number{data[0].id}!</div>;
}
