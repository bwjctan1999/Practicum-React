export default function StoreCard({ title, desc }) {
  return (
    <div className="h-full w-full rounded-lg shadow-md">
      <div className="aspect-video w-full rounded-t-lg bg-slate-500 pl-6 pt-6 pb-14 pr-14">
        <div className="aspect-square w-1/3 rounded-lg bg-white"></div>
      </div>
      <div className="px-6 py-4">
        <h6 className="text-xl font-medium">{title}</h6>
        <p className="mt-2 text-base">{desc}</p>
      </div>
    </div>
  );
}
