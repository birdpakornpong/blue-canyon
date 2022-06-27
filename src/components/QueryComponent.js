import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function QueryComponent() {
  const { isError, isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <h1>Posts</h1>
      {data.map((post, index) => {
        return <li key={index}>{post.title}</li>;
      })}
    </div>
  );
}
