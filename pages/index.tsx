import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetch from 'whatwg-fetch';
const fetcher = (...args) => fetch(...args).then(res => res.json());
const Home: NextPage = () => {

  // const [name, setName] = useState('');

  const { data, error } = useSWR('/api/hello',fetcher);

  // const handleNameRequest = async () => {
  //   const response = await fetch('/api/hello');
  //   const result = await response.json();
  //   setName(result.name);
  // };

  // useEffect(() => {
  //   handleNameRequest();
  // }, []);
  

  return (
    <div> 
      <div>
      hello {data?.name}
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
