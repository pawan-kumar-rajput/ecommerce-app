import Product from "@/model/product";
import connectMongodb from "@/services/mongodb";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectMongodb();
        const products = await Product.find();
        return NextResponse.json(products);
    }
    catch (err) {
        console.log("error in getting product " + err);
        return NextResponse.json({
            status:false,
            msg:"error in getting products"
        })
    }
}
