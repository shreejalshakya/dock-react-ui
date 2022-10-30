import React, { useCallback, useEffect, useState } from "react";
import {API_BASE_URL} from "../utils/environments";

const API_URL = API_BASE_URL;
const BLOG_API_PATH = '/blogs';

export default function Blogs() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(undefined);
    
    const fetchData = useCallback(() => {
        setIsLoading(true);
        fetch(`${API_URL}${BLOG_API_PATH}`)
        .then(res => res.json())
        .then(json => {
            setBlogs(json);
        })
        .catch(err => {
            setError(err?.message || 'Something went wrong!!!! \n Please try again later.');
        }).finally(() => {
            setIsLoading(false);
        })
    });
    
    useEffect(() => {
        fetchData();
        return () => {}
    }, []);

    return (
        <>
            {isLoading && (
                <div>
                    <p>Please wait (Fetching Data...)</p>
                </div>
            )}
            {!isLoading && !error && blogs && blogs.length > 0 && blogs.map(blog => (
                <div>
                    <p>{blog?.title}</p>
                    <p>{blog?.description}</p>
                    <p>{blog?.created_date}</p>
                </div>
            ))};

            {!isLoading && error && (
                <div>
                    <p>ERROR: {error}</p>
                </div>
            )}
        </>
    )
}