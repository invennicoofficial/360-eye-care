import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, date } = body;

    // Validate required fields
    if (!name || !email || !phone || !date) {
      return Response.json(
        { error: "Name, email, phone, and date are required" },
        { status: 400 }
      );
    }
    // Create a transporter
    const transporter = await nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
      secure: process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: "New Virtual Shop Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
      `,
      html: `
        <h2>Virtual Shopping Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
