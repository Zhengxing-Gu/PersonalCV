import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_f21fEZL6_Hni9MZs8pNdSyLyjPZ2VSN1Y');
const fromEmail = 'onboarding@resend.dev';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: 'cnguzx@163.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
