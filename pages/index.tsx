import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  // const [name, setName] = useState('');

  // const { data, error } = useSWR('/api/hello',fetcher);

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
      {/* hello {data?.name} */}
      </div>
      <div>
        <Link href="/about">
          <a className="ml-2">About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
