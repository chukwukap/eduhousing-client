export async function POST(req: Request, res: Response) {
  const response = await fetch(
    "https://obeisant-ear-ordinary-selection-production.pipeops.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    }
  );

  const userData = await response.json();
  console.log(userData);

  const data = await res.json();

  return Response.json(data);
}
