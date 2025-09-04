import "../css/blog.css";
import BlogPostBig from "../components/blog/BlogPost";
import BlogPostSmall from "../components/blog/BlogPostSmall";
import Newsletter from "../components/global/Newsletter";
import useCMSStore from "../store/useCMSStore";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const blog = useCMSStore((state) => state.blog);

  // filtriranje blogova po search query i kategoriji
  const filteredBlog = blog
    .filter((b) =>
      b.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((b) => (activeTag ? b.acf.kategorija === activeTag : true))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // najnoviji prvi

  const shortArray = filteredBlog.slice(0, 2);
  const restOfThePosts = filteredBlog.slice(2);

  const categories = ["Informativno", "Lifestyle", "Projekti", "Vodiči"];

  return (
    <>
      <div className="blog-hero">
        <img src="/try.jpg" alt="Hero slika" />
        <div className="content">
          <h1>Savjeti i inspiracija za umjetne travnjake</h1>
          <p>Otkrijte kako maksimalno iskoristiti prednosti umjetne trave</p>
        </div>
      </div>

      {blog ? (
        <div className="blog-posts">
          <div className="blog-posts-heading">
            <h2 className="blog-h2">Naši blogovi</h2>
            <p>
              U nastavku pronađite naše najnovije članke i inspirirajte se
              idejama za umjetne travnjake.
            </p>
            <div className="search-cat">
              <input
                type="text"
                placeholder="Pretražite blogove..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="cat-cont">
                <span
                  className={activeTag === "" ? "active" : ""}
                  onClick={() => setActiveTag("")}
                >
                  Sve kategorije
                </span>

                {categories.map((cat) => (
                  <span
                    key={cat}
                    className={activeTag === cat ? "active" : ""}
                    onClick={() => setActiveTag(activeTag === cat ? "" : cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="blog-content">
            {shortArray.map((blog) => (
              <BlogPostBig blog={blog} key={blog.id} />
            ))}
          </div>

          <div className="blog-content-small">
            {restOfThePosts.map((blog) => (
              <BlogPostSmall key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <Newsletter />
    </>
  );
};

export default Blog;
