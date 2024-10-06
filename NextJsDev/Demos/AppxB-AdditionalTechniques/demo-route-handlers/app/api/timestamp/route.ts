export function GET() {

    const now = new Date()

    return Response.json({ 
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString() 
    })
}