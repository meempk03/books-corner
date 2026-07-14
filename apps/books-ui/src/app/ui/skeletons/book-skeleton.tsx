export default function BookSkeleton() {
  return (
    <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-card border border-border shadow-cinematic animate-pulse">
      <div className="flex h-full flex-col justify-between">
        {/* Cover */}
        <div className="bg-surface" />

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <div className="mt-5 h-6 w-4/5 rounded bg-surface" />

          {/* Author */}
          <div className="mt-5 h-4 w-1/2 rounded bg-surface" />
        </div>
      </div>
    </div>
  );
}
