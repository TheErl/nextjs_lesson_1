import Link from 'next/link';
import { useRef, useState } from 'react';

const AboutPage: React.FC = () => {
    const [count, setCount] = useState(0);
    const refTest = useRef(null);

    return (
        <div ref={refTest}>
        <h1>About {count}</h1>
        <button onClick={() => setCount(count + 1)}>Count++</button>
        <button onClick={() => setCount(count - 1)}>Count--</button>
        <p>This is the about page</p>
        <Link href="/">
            <a>Home</a>
        </Link>
        </div>
    );
};

export default AboutPage;
