import { ConnectDB } from '@/dbConfig/dbConfig'
import User from '@/models/emailModel'
import { NextRequest,NextResponse} from 'next/server'

ConnectDB()

export async function POST(request:NextRequest) {
    try {
        const reqbody = await request.json()
        console.log(reqbody)
        const {name, email,message} = reqbody


        const newUser = new User({
            name,
            email,
            message
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "Email sent",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message},
            {status:500}
        )
    }
}