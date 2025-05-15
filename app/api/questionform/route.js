import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { fullName, phone, email, dateOfBirth, message, recaptchaToken } =
      body;

    // Validate required fields
    if (!fullName || !email || !phone || !dateOfBirth || !message) {
      return Response.json(
        {
          error: "Name, email, phone, date of birth, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    // If reCAPTCHA verification fails
    if (!recaptchaData.success) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
      secure: process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE === "true", // true for 465, false for other ports
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
      subject: "New Contact Form Submission",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Date of Birth: ${dateOfBirth}
        
        Message:
        ${message || "No message provided"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
    // console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
