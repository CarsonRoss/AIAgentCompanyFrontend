export default async function StatusPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/api/up`, { cache: "no-store" });
  const ok = res.ok;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Backend Status</h1>
      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded ${ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
        <span className={`inline-block h-2 w-2 rounded-full ${ok ? "bg-green-600" : "bg-red-600"}`}></span>
        <span>{ok ? "Healthy" : "Down"}</span>
      </div>
    </div>
  );
}
