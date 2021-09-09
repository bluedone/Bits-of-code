import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  return {
    props: {
      blogs: allBlogs,
    },
  };
};

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Bits-0f-C0de 🚀</title>
        <meta name="title" content="Bits-0f-C0de 🚀" />
        <meta
          name="description"
          content="Tech blogs and articles on various topics related to Software Development"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogs.soumyajit.tech/" />
        <meta property="og:title" content="Bits-0f-C0de 🚀" />
        <meta
          property="og:description"
          content="Tech blogs and articles on various topics related to Software Development"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/soumyajit4419/Bits-0f-C0de/main/Extra/sc.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blogs.soumyajit.tech/" />
        <meta property="twitter:title" content="Bits-0f-C0de 🚀" />
        <meta
          property="twitter:description"
          content="Tech blogs and articles on various topics related to Software Development"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/soumyajit4419/Bits-0f-C0de/main/Extra/sc.png"
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map((blog) => (
                <BlogHeader
                  key={blog.data.Id}
                  data={blog.data}
                  content={blog.content}
                  readTime={blog.readTime.text}
                />
              ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
