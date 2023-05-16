import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Article from '../../components/article/Article';
/*make appropriate news and images*/
const Blog = () => (
  <div className="seva__blog section__padding" id="blog">
    <div className="seva__blog-heading">
      <h1 className="gradient__text">A lot is happening around you, <br /> We keep you in the loop.</h1>
    </div>
    <div className="seva__blog-container">
      <div className="seva__blog-container_groupA">
        <Article imgUrl={blog01} date="May16, 2023" text="New service provider app increasing in popularity across Southampton - guess who?" text1={'ITS US!'} />
      </div>
      <div className="seva__blog-container_groupB">
        <Article imgUrl={blog02} date="May 6, 2023" text="University of Southapmton has no water!" />
        <Article imgUrl={blog03} date="March 25, 2023" text="Emergency in SO15 1DP Due to pipeline burst." />
        <Article imgUrl={blog04} date="March 2, 2023" text="U.K. facing shortages of worker - Food and Fuel Prices expected to increase." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="MISSING EGGS! Can you find them? - shortage of eggs causing protien defficiency." />
      </div>
    </div>
  </div>
);

export default Blog;
