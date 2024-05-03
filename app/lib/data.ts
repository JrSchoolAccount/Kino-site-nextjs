import { Screening } from "./definitions";

export const fetchTenUpcomingScreenings : (dataSource: Screening[]) => Screening[] = (dataSource) =>
    {   
        try {
        // const data = await fetch() ---- here is where I fetch from database of movies
        const data = dataSource;
        return data;
    } catch (err) {
        console.log('There was an error');
        throw new Error;
    }
}

/* export async function fetchTenUpcomingScreenings(dataSource: Screening[]): Promise<Screening[]> { 
       
        try {
        const data = await HighscoreModel.find().lean();
        // const data = dataSource;
        return data;
    } catch (err) {
        console.log('There was an error');
        throw new Error;
    }
} */