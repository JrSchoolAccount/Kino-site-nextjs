import dbConnect from "@/app/lib/dbConnect";
import Screening from "@/app/lib/models";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
    const screenings = await Screening.find({});
    console.log(screenings);
    return NextResponse.json(screenings);
} catch (err:any) {
    return NextResponse.json({error: err.message});

}
}