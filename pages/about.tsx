import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import ThemeContext from 'utils/theme';

const AboutPage: React.FC = () => {
    const [count, setCount] = useState(0);
    const refTest = useRef(null);
    
    const theme = useContext(ThemeContext);


    return (
        <div ref={refTest}>
        <h1>Theme: {theme}</h1>
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
