// https://onecompiler.com/react/43resdefk

import React, { useState, useEffect } from 'react';
function App() {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        const timer = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                signal: abortController.signal,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        console.error('Fetch error:', err);
                    }
                });
        }, 2000);

        return () => {
            clearTimeout(timer); // in case timeout hasn't fired yet
            abortController.abort();
        };
    }, []);

    return (
        <div>
            {isPending && <span>Loading...</span>}
            {blogs &&
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <div>{blog.id}</div>
                        <div>{blog.title}</div>
                    </div>
                ))}
        </div>
    );
}

export default App;