export default function PageLoader({
  message = 'Loading...',
}: {
  message?: string;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-gold">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="h-12 w-12 border-4 border-t-transparent border-gold rounded-full animate-spin"></div>
        {/* Loading Message */}
        <p className="text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}
