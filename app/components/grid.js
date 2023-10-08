export default function Grid({ props, children }) {
  return (
    <div className="container my-8">
      <div className="grid justify-center sm:justify-start md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}
