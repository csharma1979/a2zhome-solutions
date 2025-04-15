
import BlogDetails from "../../../src/components/BlogDetails/BlogDetails";

const page = ({ params }) => {
  const { slug } =  params;
  
  return (
    <div>
      <BlogDetails slug={slug} />
    </div>
  );
};

export default page;
