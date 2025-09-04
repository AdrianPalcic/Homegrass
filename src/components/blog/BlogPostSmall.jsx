import { ChevronRight } from "lucide-react";
import React from "react";

const BlogPostSmall = ({ blog }) => {
  const image = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const slug = blog.slug;
  const title = blog.title.rendered;
  const cat = blog.acf.kategorija;
  const alt = blog._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

  return (
    <div className="blog-post-small">
      <div className="blog-img-container">
        <a href={`/blog/${slug}`}>
          <img src={image} alt={alt} loading="lazy" />
        </a>
      </div>
      <div className="blog-post-content">
        <div>
          <div className="tag-container">
            <span className="category">{cat}</span>
          </div>
          <h2>{title}</h2>
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

export default BlogPostSmall;
