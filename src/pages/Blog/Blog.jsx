import React from 'react';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const Blog = () => {
    return (
        <div className='my-5' style={{marginTop: '8rem'}}>
            <h2>This is Blog</h2>
            <LoadingSpinner></LoadingSpinner>
        </div>
    );
};

export default Blog;