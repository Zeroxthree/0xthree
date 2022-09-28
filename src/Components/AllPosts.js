import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function AllPosts() {
    const[allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        SanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);

    return (
        <div>
            <h2> BLog posts.</h2>
            <h3>These are blog posts</h3>
            <div>
                {allPostsData &&
                   allPostsData.map((post,index) => (
                    <link to={"/" + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img 
                            src={post.mainImage.asset.url}
                            alt="Hero Image"
                            />
                            <span>
                                <h2>{post.title}</h2>
                            </span>
                        </span>
                    </link>
                   ))}
            </div>
        </div>
    );
}
