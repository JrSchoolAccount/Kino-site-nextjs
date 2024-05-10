
import { NextApiRequest, NextApiResponse } from "next";
import Review from "@/Model/review";
import connectMongo from "@/app/lib/connectMongodb";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
        console.log('Received data:', req.body);
        if(req.method !== 'POST'){
          return res.status(405).json({message: 'Method Not Allowed'});
  }
  await connectMongo();

  try{
          const{ name,rating,comment } = req.body;
          const numericRating = parseInt(rating, 10);

          if(!name || typeof name !=='string' || isNaN( numericRating) || !comment || typeof comment !=='string'){
                    return res.status(400).json({message: 'Invalid input'});
          }

          const newReview = new Review({
                    name: name,
                    rating: numericRating,
                    comment:comment
          });

          await newReview.save();
          console.log('User created:', newReview );
        // --------------

        res.status(201).json({message: 'User created successfully', data: newReview});
        
 
  }
  catch(error){
          console.error('Error created user:', error);
          res.status(500).json({message: 'Internal Server Error'});
  }
}