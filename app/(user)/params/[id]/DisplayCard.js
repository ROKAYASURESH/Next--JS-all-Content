import React, { useEffect, useState } from 'react';

export default function DisplayCard({ id }) {
  const [paramsData, setParamsData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getParamsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setParamsData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getParamsData();
  }, [id]); 

//   if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
//   if (!paramsData) return <div>No data found</div>;

  return (
    <div>
      <h2>{paramsData?.title}</h2>
      <p>{paramsData?.body}</p> {/* Example: Display more data */}
    </div>
  );
}