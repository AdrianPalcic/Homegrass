import { useParams } from "react-router-dom";
import "../css/blog.css";
const BlogPostPage = () => {
  const { slug } = useParams();

  return (
    <div className="blogPost-body">
      <div className="heading">
        <span>06. rujan, 2025</span>
        <h1>Kako odabrati pravu umjetnu travu za vaš vrt i terasu</h1>
      </div>

      <div className="blogPost-img-container">
        <img src="/try.jpg" alt="Blog post homegrass" />
      </div>

      <div className="blogPostPadding">
        <span className="category">Informativno</span>

        <a
          href="https://apdesign.dev"
          target="_blank"
          className="autor-container"
        >
          <div className="avatar">
            <img
              src="/cetka PB.png"
              alt="Autor sadrzaja za umjetnu travu hrvatska"
            />
          </div>
          <div className="name-title">
            <p className="name">Adrian</p>
            <p className="title">Content Creator</p>
          </div>
        </a>

        <div className="subtitle">
          <h2>Ovdje počinje naša priča</h2>
        </div>

        <div className="body-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            modi delectus, architecto est molestiae impedit non dolore dolorem
            assumenda culpa iste? Qui quaerat minus necessitatibus adipisci
            sunt, quasi eaque modi.
          </p>
        </div>

        <div className="button-con">
          <a href="/blog">Zanima Vas još?</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
