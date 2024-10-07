import React, { useState } from 'react';
import './styles/BlogPage.css';
import { FaSearch } from 'react-icons/fa';
import NavBar from '../components/nav';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const headerColor = '#fff';
  const color = '#001f3f';

  const blogPosts = [
    {
      title: 'How to Enhance Your Business with Our POS System',
      date: 'September 10, 2023',
      excerpt: 'Discover how our POS system can streamline operations and increase sales for your business...',
      link: '#',
      image: 'https://via.placeholder.com/250x250', // Placeholder image URL
    },
    {
      title: 'Top 10 Features Every POS System Must Have',
      date: 'August 20, 2023',
      excerpt: 'In this blog, we cover the must-have features that make your POS system a complete solution...',
      link: '#',
      image: 'https://via.placeholder.com/250x250', // Placeholder image URL
    },
    {
      title: 'Why Cloud-Based POS Systems are the Future',
      date: 'July 15, 2023',
      excerpt: 'Cloud-based POS systems offer flexibility, scalability, and security. Here’s why your business needs one...',
      link: '#',
      image: 'https://via.placeholder.com/250x250', // Placeholder image URL
    },
  ];

  // Filtered blog posts based on search term
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Example to get recent posts (assuming they are the latest posts in the array)
  const recentPosts = filteredPosts.slice(0, 3);

  // Example to get popular posts (assuming they are the first few posts in the array)
  const popularPosts = filteredPosts.slice(0, 3);

  return (
    <div className="blog-page">
      <NavBar headerColor={headerColor } color={color} />
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Stay updated with the latest Business trends and insights </p>
      </div>

      <div className="blog-search">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="blog-content">
        <div className="blog-list">
          {filteredPosts.map((post, index) => (
            <a href={post.link} className="blog-item" key={index}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>

        <aside className="blog-sidebar">
          <div className="blog-categories">
            <h3>Popular Posts</h3>
            <ul>
              {popularPosts.map((post, index) => (
                <li key={index}><a href={post.link}>{post.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="blog-recent">
            <h3>Recent Posts</h3>
            <ul>
              {recentPosts.map((post, index) => (
                <li key={index}><a href={post.link}>{post.title}</a></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
       <Footer  headerColor={headerColor} color = {color}/>
    </div>
  );
};

export default BlogPage;
