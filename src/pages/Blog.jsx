import "../css/blog.css";
import BlogPostBig from "../components/blog/BlogPost";
import BlogPostSmall from "../components/blog/BlogPostSmall";
import Newsletter from "../components/global/Newsletter";
import useCMSStore from "../store/useCMSStore";
import FetchCPT from "../utils/FetchCPT";

const Blog = () => {
  const setBlog = useCMSStore((state) => state.setBlog);
  const blog = useCMSStore((state) => state.blog);

  const sortedBlog = [...blog].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const shortArray = sortedBlog.slice(0, 2);
  const restOfThePosts = sortedBlog.slice(2);

  console.log(shortArray);

  return (
    <>
      <FetchCPT endpoint="blog" setState={setBlog} />
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
              <input type="text" placeholder={"Pretražite blogove..."} />
              <div className="cat-cont">
                <span>Informativno</span>
                <span>Lifestyle</span>
                <span>Projekti</span>
                <span>Vodiči</span>
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
