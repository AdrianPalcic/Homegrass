import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();

  return <div>BlogPostPage {slug}</div>;
};

export default BlogPostPage;
