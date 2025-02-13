import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    // MongoDB connection
    const uri = process.env.MONGODB_URI; // Ensure this is set in your .env file
    const client = new MongoClient(uri);

    try {
      // Connect to MongoDB
      await client.connect();
      const database = client.db("LOCcontacts"); // Replace with your database name
      const collection = database.collection("contactSubmissions"); // Replace with your collection name

      // Save form data to MongoDB
      const result = await collection.insertOne({
        name,
        email,
        phone: phone || "Not provided",
        message,
        timestamp: new Date(),
      });

      console.log("Form data saved to MongoDB:", result.insertedId);

      // Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Ensure this is set in your .env file
          pass: process.env.EMAIL_PASS, // Ensure this is set in your .env file
        },
      });

      const mailOptions = {
        from: email,
        to: "Mitsananikone@gmail.com", // Replace with your email
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message: ${message}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to send email or save data" });
    } finally {
      // Close the MongoDB connection
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}