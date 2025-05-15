import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Extract only the fields that exist in the form
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      preferredDate,
      preferredTime,
      reasonForVisit,
      consentAgreed,
    } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !preferredDate ||
      !preferredTime ||
      !reasonForVisit
    ) {
      return Response.json(
        { error: "All required fields must be completed" },
        { status: 400 }
      );
    }

    // Validate consent agreement
    if (!consentAgreed) {
      return Response.json(
        { error: "You must agree to the Virtual Consult Consent Form" },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
      secure: process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    // Email content
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM || email,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: "New Virtual Consultation Request",
      text: `
        Virtual Consultation Request
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phoneNumber}
        Date of Birth: ${dateOfBirth || "Not provided"}
        Preferred Date: ${preferredDate}
        Preferred Time: ${preferredTime}
        
        Reason for Visit:
        ${reasonForVisit}
        
        Consent Form Agreed: Yes
      `,
      html: `
        <h2>Virtual Consultation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth || "Not provided"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Reason for Visit:</strong></p>
        <p>${reasonForVisit.replace(/\n/g, "<br>")}</p>
        <p><strong>Consent Form Agreed:</strong> Yes</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success
    return Response.json({
      success: true,
      message:
        "Your virtual consultation request has been submitted successfully",
    });
  } catch (error) {
    // console.error("Error processing virtual consultation request:", error);
    return Response.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
