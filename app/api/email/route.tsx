import ContactEmail from "@/app/email/ContactEmail";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_KEY);

export async function POST(request: Request) {
  const data = await request.json;
  await resend.sendEmail({
    from: "ncprs10@gmail.com",
    to: "nouellec@gmail.com",
    subject: "hello world",
    react: <ContactEmail />,
  });
  return NextResponse.json({
    status: "Ok",
  });
}
