import User from "@/model/user";
import connectMongodb from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
        const res=await req.json();
        await connectMongodb();
        const user=new User({
            name:res.name,
            email:res.email,
            password:res.password
        });
        await user.save();
        return NextResponse.json({status:true,msg:'successfully registered'});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({msg:'error'});
    }
}