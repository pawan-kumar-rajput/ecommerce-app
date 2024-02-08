import Product from "@/model/product";
import connectMongodb from "@/services/mongodb";
import { NextResponse } from "next/server";
export async function GET(req,{params}) {
    try {
        await connectMongodb();
        const products = await Product.findOne({_id:params.id});
        return NextResponse.json(products);
    }
    catch (err) {
        console.log("error in getting product " + err);
        return NextResponse.json({
            status:false,
            msg:"error in getting product"
        })
    }
}
