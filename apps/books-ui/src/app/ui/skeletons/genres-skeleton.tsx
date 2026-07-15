export default function GenresSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-10 bg-card border-border rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
}
