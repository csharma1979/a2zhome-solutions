import dbConnect from "../../../../src/lib/database";
import Blog from "../../../../src/Models/Blog/BlogModal";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { slug } = await params;

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Error fetching blog", error: error.message },
      { status: 500 }
    );
  }
}

// PUT - update blog by slug
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { slug } = params;
    const body = await req.json();

    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    blog.blogTopic = body.blogTopic || blog.blogTopic;
    blog.slug = slugify(body.blogTopic || blog.blogTopic, { lower: true, strict: true });
    blog.blogCategory = body.blogCategory || blog.blogCategory;
    blog.keywords = body.keywords || blog.keywords;
    blog.videoUrl = body.videoUrl || blog.videoUrl;
    blog.blogDescription = body.blogDescription || blog.blogDescription;
    blog.status = body.status || blog.status;

    const updatedBlog = await blog.save();

    return NextResponse.json(
      { message: "Blog updated successfully", data: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
