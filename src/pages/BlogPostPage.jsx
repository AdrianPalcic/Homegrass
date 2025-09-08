import { useParams } from "react-router-dom";
import parse, { domToReact } from "html-react-parser";
import "../css/blog.css";
import useCMSStore from "../store/useCMSStore";
import { Loader, User } from "lucide-react";
import { useMemo, memo } from "react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const blog = useCMSStore((state) => state.blog);

  const targetBlog = useMemo(
    () => blog.find((blog) => String(blog.slug) === slug),
    [blog, slug]
  );

  const content = targetBlog?.content.rendered;

  const parsedContent = useMemo(() => {
    if (!content) return null;

    return parse(content, {
      replace: (domNode) => {
        if (domNode.type !== "tag" || !domNode.name) return;

        switch (domNode.name) {
          case "p":
            return (
              <p className="blog-paragraph">{domToReact(domNode.children)}</p>
            );
          case "h3":
            return (
              <h3 className="blog-heading">{domToReact(domNode.children)}</h3>
            );
          case "br":
            return <br />;
          default:
            return domNode;
        }
      },
    });
  }, [content]);

  const image = useMemo(
    () => targetBlog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    [targetBlog]
  );

  const formattedDate = useMemo(() => {
    if (!targetBlog?.date) return "";
    const dateObj = new Date(targetBlog.date);
    return new Intl.DateTimeFormat("hr-HR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(dateObj);
  }, [targetBlog?.date]);

  if (!targetBlog)
    return (
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  const title = targetBlog.title.rendered;
  const cat = targetBlog.acf.kategorija;
  const alt = targetBlog._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
  const subtitle = targetBlog.acf.subtitle;

  return (
    <div className="blogPost-body">
      <div className="heading">
        <span>{formattedDate}</span>
        <h1>{title}</h1>
      </div>

      <div className="blogPost-img-container">
        <img src={image} alt={alt || ""} loading="lazy" decoding="async" />
      </div>

      <div className="blogPostPadding">
        <span className="category">{cat}</span>

        <a
          href="https://apdesign.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="autor-container"
        >
          <div className="avatar">
            <User />
          </div>
          <div className="name-title">
            <p className="name">Adrian</p>
            <p className="title">Content Creator</p>
          </div>
        </a>

        <div className="subtitle">
          <h2>{subtitle}</h2>
        </div>

        <div className="body-container">{parsedContent}</div>

        <div className="button-con">
          <a href="/blog">Zanima Vas još?</a>
        </div>
      </div>
    </div>
  );
};

export default memo(BlogPostPage);
