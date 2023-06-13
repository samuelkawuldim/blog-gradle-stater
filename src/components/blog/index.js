import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2023-06-01',
    },
    {
      id: 2,
      title: 'Blog 2',
      author: 'Jane Doe',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2023-06-01',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl underline font-bold mb-8">Our Blogs</h1>   
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-2xl rounded-md p-6 mb-6"
        >
          <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-500 text-sm mb-4">
            <span className="font-semibold">{blog.author}</span> - {blog.date}
          </p>
          <p className="text-gray-700">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
