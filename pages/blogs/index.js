import React from 'react';
import dynamic from 'next/dynamic';
import Headers from "../../components/common/headers";
import Footers from "../../components/common/footers";
import BlogComponent from "../../components/pages/blog/BlogComponent";
function Blogs() {
    return (
        <>
            <Headers/>
            <BlogComponent />
            <Footers />
        </>
    )
}

export default Blogs;
