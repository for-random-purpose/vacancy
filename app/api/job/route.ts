export async function POST(req: Request) {
    try {
        const { title, company, location, salary, description, mesfert } = await req.json();
        console.log(company);
        // if (!title || !company || !salary || !location || !description || !mesfert) {
        //     return Response.json({ message: 'Please fill the form' }, { status: 400 });
        // }

        const parsedMesfert = mesfert.split(",")
        const newJob = {
            title, company, location, salary, description, mesfert: parsedMesfert
        }
        return Response.json({
            message: 'Job posted',
            data: newJob
        });
    } catch (error: any) {
        console.log(error);
        return Response.json({ message: 'Error logging in', error: error.message }, { status: 500 });
    }
}