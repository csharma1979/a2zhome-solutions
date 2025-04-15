import dbConnect from "../../../../src/lib/database";
import Blog from "../../../../src/Models/Blog/BlogModal";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { slug } = await params;

    console.log("Received params:", params);
    console.log("Extracted slug:", params?.slug);

    const blog = await Blog.findOne({ slug });
    console.log("Blog found in DB:", blog);
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
