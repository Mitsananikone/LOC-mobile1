import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // MongoDB connection
    const uri = process.env.MONGODB_URI; // Add your MongoDB URI to .env
    const client = new MongoClient(uri);

    try {
      // Connect to MongoDB
      await client.connect();
      const database = client.db("your-database-name"); // Replace with your database name
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
          user: process.env.EMAIL_USER, // Use environment variable
          pass: process.env.EMAIL_PASS, // Use environment variable
        },
      });

      const mailOptions = {
        from: email,
        to: "Mitsananikone@gmail.com",
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
      console.error(error);
      res.status(500).json({ error: "Failed to send email or save data" });
    } finally {
      // Close the MongoDB connection
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}