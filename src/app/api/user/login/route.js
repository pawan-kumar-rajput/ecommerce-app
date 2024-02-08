import User from "@/model/user";
import connectMongodb from "@/services/mongodb";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        const res=await req.json();
        await connectMongodb();
        const user=await User.findOne({email:res.email});
        if(res.email===user.email && res.password===user.password){
            const token=jwt.sign(
                {
                    name:user.name,
                    email:user.email,
                },
                'jwtsecret',
                {expiresIn:'1d'}
            );
            return NextResponse.json({status:true,token});
        }
        return NextResponse.json({status:false,msg:'invalid credentials'});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({status:false,msg:'error occured'});
    }
}