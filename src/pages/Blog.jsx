import "../css/blog.css";
import BlogPostBig from "../components/blog/BlogPost";
import BlogPostSmall from "../components/blog/BlogPostSmall";
import Newsletter from "../components/global/Newsletter";

const Blog = () => {
  return (
    <>
      <div className="blog-hero">
        <img src="/try.jpg" alt="Hero slika" />
        <div className="content">
          <h1>Savjeti i inspiracija za umjetne travnjake</h1>
          <p>Otkrijte kako maksimalno iskoristiti prednosti umjetne trave</p>
          {/* <div className="input-container">
            <Search className="ico-left" />
            <input
              type="text"
              className="search-input"
              placeholder="Što Vas zanima..."
            />
            <X className="ico-right" />
          </div> */}
        </div>
      </div>

      <div className="blog-posts">
        <div className="blog-posts-heading">
          <h2>Naši blogovi</h2>
          <p>
            U nastavku pronađite naše najnovije članke i inspirirajte se idejama
            za umjetne travnjake.
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
          <BlogPostBig />
          <BlogPostBig />
        </div>

        <div className="blog-content-small">
          <BlogPostSmall />
          <BlogPostSmall />
          <BlogPostSmall />
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Blog;
