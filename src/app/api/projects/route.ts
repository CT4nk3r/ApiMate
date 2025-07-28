type Project = {
  id: string;
  name: string;
  description: string;
};

const projects: Project[] = [
  { id: "1", name: "Api Playground", description: "Experiment with APIs!" },
  { id: "2", name: "Docs Demo", description: "Swagger & TypeSpec showcase." }
];

export async function GET() {
  return Response.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProject: Project = {
    id: (Math.random() * 10000).toFixed(0),
    name: body.name,
    description: body.description ?? ""
  };
  projects.push(newProject);
  return Response.json(newProject, { status: 201 });
}
