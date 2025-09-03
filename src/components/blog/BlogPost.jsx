import React from "react";
import ButtonMain from "../buttons/ButtonMain";
import { ChevronRight } from "lucide-react";

const BlogPostBig = () => {
  const slug = "Blgo1";

  return (
    <div className="blog-post">
      <div className="blog-img-container">
        <a href={`/blog/${slug}`}>
          <img src="/try.jpg" alt="Savjeti za umjetne travnjake" />
        </a>
      </div>
      <div className="blog-post-content">
        <div>
          <div className="tag-container">
            <span className="category">Kategorija</span>
          </div>
          <h2>Naš prvi Blog Post!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            tempore earum facere quam repudiandae? Tempore deleniti quidem
            quisquam impedit minima ipsa et magni illo! Nulla esse non veniam.
            Voluptatibus, optio?
          </p>
        </div>

        <div>
          <a className="linke" href={`/blog/${slug}`}>
            Pročitaj više <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostBig;
