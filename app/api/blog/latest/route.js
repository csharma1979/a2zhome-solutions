import dbConnect from "../../../../src/lib/database";
import Blog from "../../../../src/Models/Blog/BlogModal";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
    return NextResponse.json({
      message: "Latest blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching latest blogs",
      error: error.message,
    });
  }
}
