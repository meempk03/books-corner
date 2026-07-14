export function GenresSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="h-10 bg-card border-border rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
}
