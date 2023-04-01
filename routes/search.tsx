import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query1?: string;
  query2?: string;
  query3?: string;
  query4?: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    console.log("GET REQUEST!", req);
    const url = new URL(req.url);
    const query1 = url.searchParams.get("q1") || "";
    const query2 = url.searchParams.get("q2") || "";
    const results = NAMES.filter(
      (name) => name.includes(query1) || name.includes(query2)
    );
    console.log("Results", results);
    return ctx.render({ results, query1, query2 });
  },
  async POST(req, ctx) {
    console.log("POST REQUEST!", req);
    const f = await req.formData();
    console.log(f);
    for (const v of f.entries()) console.log("Entry: ", v);
    return ctx.render({ results: ["Justin"], query3: "", query4: "" });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query1, query2, query3, query4 } = data;
  return (
    <div>
      <p>GET</p>
      <form method="get">
        <input type="text" name="q1" value={query1} />
        <input type="text" name="q2" value={query2} />
        <button type="submit">Search</button>
      </form>
      <p>POST</p>
      <form method="post">
        <input type="text" name="q3" value={query3} />
        <input type="text" name="q4" value={query4} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
