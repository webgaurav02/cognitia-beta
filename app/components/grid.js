export default function Grid({ props, children }) {
  return (
    <div className="container my-8">
      <div className="grid justify-center sm:justify-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
}
