import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Blog = () => {
  // Static data for the blog (no need for setBlogs if you don't modify the data)
  const blogs = [
    {
      id: 1,
      title: "How to Craft Beautiful Designs",
      description:
        "Learn the art of crafting beautiful and functional designs for your projects.",
      image: "/l.jpg", // Replace with dynamic upload paths
    },
    {
      id: 2,
      title: "The Essence of Handmade Creations",
      description:
        "Discover the unique value of handmade items in the world of art and crafts.",
      image: "/l2.jpg", // Replace with dynamic upload paths
    },
    {
      id: 3,
      title: "Interior Design Trends for 2024",
      description:
        "Explore the latest trends in interior design and create stunning spaces.",
      image: "/l3.avif", // Replace with dynamic upload paths
    },
  ];

  // Static data for recent posts
  const recentPosts = [
    { id: 1, title: "Crafting Basics", image: "/q.jpeg" },
    { id: 2, title: "Handmade Essentials", image: "/q2.jpg" },
    { id: 3, title: "Design Tips", image: "/q3.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: "url('/bg2.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
          <h1 className="text-6xl font-semibold">Our Blog</h1>
          <br />
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Blog Posts */}
        <div className="lg:col-span-2 space-y-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-start">
              <div className="w-full h-96 relative mb-4">
                <Image
                  src={blog.image} // Dynamically loaded image
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section - Sidebar */}
        <div>
          {/* Search Bar */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Craft", "Design", "Handmade", "Interior", "Woods"].map(
                (category, index) => (
                  <li key={index}>
                    <a
                      href={`/category/${category.toLowerCase()}`}
                      className="text-gray-700 hover:text-black"
                    >
                      {category}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center">
                  <div className="w-16 h-16 relative mr-4">
                    <Image
                      src={post.image} // Dynamically loaded image
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <a
                    href={`/post/${post.id}`}
                    className="text-gray-700 hover:text-black"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
