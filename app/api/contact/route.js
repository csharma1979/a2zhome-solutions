import ContactForm from "../../../src/Models/Contact/Contact";
import nodemailer from "nodemailer";
import dbConnect from "../../../src/lib/database";
import { NextResponse } from "next/server";

// POST - Submit contact form request and send email
export const POST = async (req) => {
  try {
    await dbConnect(); // Ensure DB connection

    const body = await req.json();

    const { firstname, lastname, email, phoneno, countryCode, message, formType } = body;

    // console.log("Received Data:", { firstname, lastname, email, phoneno, countryCode, message, formType });

    // Save to MongoDB
    const formData = new ContactForm({
      firstname,
      lastname,
      email,
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
      to: "support@fritado.com",
      subject: formType === "Enquiry" ? "New Contact Request" : "New Sales Enquiry",
      text: `A new ${formType} request has been submitted: 
             Name: ${firstname} ${lastname}
             Email: ${email}
             Phone Number: ${countryCode} ${phoneno}
             Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Form submitted successfully and email sent." });
  } catch (error) {
    console.log(error, "An error occurred while submitting the form");
    return NextResponse.json({ error: "An error occurred while submitting the form." });
  }
};

// GET - Fetch all contact form submissions
export const GET = async () => {
  try {
    await dbConnect(); // Ensure connection to the DB
    const contactForms = await ContactForm.find();

    return NextResponse.json(contactForms);
  } catch (error) {
    console.log(error, "An error occurred while fetching the contact forms");
    return NextResponse.json({ error: "An error occurred while fetching the contact forms." });
  }
};
