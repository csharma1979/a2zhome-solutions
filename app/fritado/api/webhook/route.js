import { NextResponse } from "next/server";
import dbConnect from "../../../../src/lib/database"; // path of db connection 
import Blog from "../../../../src/Models/Blog/BlogModal"; //path of blog db
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

async function downloadImage(imageUrl, savePath) {
  return new Promise((resolve, reject) => {
    //console.log("🚀 Downloading Image from:", imageUrl); // Debugging
    const client = imageUrl.startsWith("https") ? https : http;
    client
      .get(imageUrl, (response) => {
      //  console.log("🔄 Response Status Code:", response.statusCode); 
        if (response.statusCode !== 200) {
          return reject(
            new Error(`Failed to download image: ${response.statusCode}`)
          );
        }

        const fileStream = fs.createWriteStream(savePath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close(() => resolve(savePath));
        });

        fileStream.on("error", (err) => {
          fs.unlink(savePath, () => reject(err));
        });
      })
      .on("error", reject);
  });
}

export async function POST(req) {
  try {
    //built db connection 
    await dbConnect();

    const textBody = await req.text();

    let jsonBody;
    try {
      jsonBody = JSON.parse(textBody);
    } catch (parseError) {
      console.error("❌ JSON Parsing Error:", parseError.message);
      return NextResponse.json(
        { success: false, message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { blogTopic, blogDescription, image } = jsonBody;

    if (!blogTopic || !blogDescription) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { success: false, message: "Blog topic and content are required." },
        { status: 400 }
      );
    }

    let localImagePath = "";

    if (image) {
      const uploadsDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const imageName = `${Date.now()}-${path.basename(image)}`;
      const imagePath = path.join(uploadsDir, imageName);

      try {
        await downloadImage(image, imagePath);
        localImagePath = `/uploads/${imageName}`; // Store relative path
        console.log("✅ Image downloaded successfully:", localImagePath);
      } catch (error) {
        console.error("❌ Image download failed:", error.message);
      }
    }

    // Create and save blog in MongoDB
    const newBlog = new Blog({
      blogTopic,
      blogDescription: blogDescription,
      uploadImage: localImagePath,
    });

    await newBlog.save();

    return NextResponse.json({
      success: true,
      message: "Blog received successfully!",
      // blogId: newBlog._id,
      // localImagePath,
    });
  } catch (error) {
    console.error("❌ Error in Webhook API:", error.message);
    return NextResponse.json(
      { success: false, message: `Error receiving blog: ${error.message}` },
      { status: 500 }
    );
  }
}