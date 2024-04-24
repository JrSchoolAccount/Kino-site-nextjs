import { mockedScreenings } from "./mockedScreenings";

export async function fetchTenUpcomingScreenings() {
    try {
        // const data = await fetch() ---- here is where I fetch from database of movies
        const data = mockedScreenings;
        return mockedScreenings;
    } catch (err) {
        console.log('There was an error');
    }
}