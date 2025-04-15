import DemoForm from "../../../src/Models/Demo/Demo";
import nodemailer from "nodemailer";
import dbConnect from "../../../src/lib/database";
import { NextResponse } from "next/server";

// POST - Submit demo form request and send email
export const POST = async (req) => {
  try {
    await dbConnect();

    const body = await req.json();

    const {
      firstname,
      lastname,
      email,
      companyName,
      phoneno,
      countryCode,
      message,
      formType,
    } = body;

    console.log("Received Data:", {
      firstname,
      lastname,
      email,
      companyName,
      phoneno,
      countryCode,
      message,
      formType,
    });

    // Save to MongoDB
    const formData = new DemoForm({
      firstname,
      lastname,
      email,
      companyName,
      phoneNo: phoneno,
      countryCode,
      message,
      formType,
    });
    await formData.save();

    // Send an email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "anishakumari0423@gmail.com",
        pass: "rcjuxzxcwwfeskir",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "support@a2zhome-solutions.com",
      subject: formType === "demo" ? "New Demo Request" : "New Sales Enquiry",
      text: `A new ${formType} request has been submitted: 
             Name: ${firstname} ${lastname}
             Email: ${email}
             Company Name: ${companyName}
             Phone Number: ${countryCode} ${phoneno}
             Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Form submitted successfully and email sent.",
    });
  } catch (error) {
    console.log(error, "An error occurred while submitting the form");
    return NextResponse.json({
      error: "An error occurred while submitting the form.",
    });
  }
};

// GET - Fetch all demo form submissions
export const GET = async () => {
  try {
    await dbConnect(); // Ensure connection to the DB
    const demoForms = await DemoForm.find();

    return NextResponse.json(demoForms);
  } catch (error) {
    console.log(error, "An error occurred while fetching the demo forms");
    return NextResponse.json({
      error: "An error occurred while fetching the demo forms.",
    });
  }
};
