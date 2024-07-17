import { EmailTemplate } from '@/components/Resend/email-template';
import { Resend } from 'resend';
import { NextRequest,NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_EMAIL);

export async function POST(req:any) {
  try {

    const reqbody = await req.json()
        console.log(reqbody)
        const {name,email,message} = reqbody

        const { data, error } = await resend.emails.send({
          from: 'Contact Me <onboarding@paragghatage.com>',
          to: ['thunderwolf.dev@gmail.com'],
          subject: 'Contact Me',
          react: EmailTemplate({name:name,email:email,message:message}),
          text:"nothing"
        });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
