import React from 'react';

export default async function ParamsPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h5>Params</h5>
      <p>Post ID: {id}</p>
      <h6>Post Title: {data.title}</h6>
      <p>Post Body: {data.body}</p>
    </div>
  );
}