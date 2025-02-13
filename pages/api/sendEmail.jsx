import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "API is working! Use POST to send data." });
  }

  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    // MongoDB connection
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db("LOCcontacts");
      const collection = database.collection("contactSubmissions");

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
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: "Mitsananikone@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to send email or save data" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
