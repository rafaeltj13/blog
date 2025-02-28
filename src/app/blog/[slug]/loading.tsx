export default function Loading() {
  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto">
      <div className="animate-pulse">
        <div className="h-8 bg-foreground rounded w-2/4 mb-4"></div>
        <div className="h-4 bg-foreground rounded w-1/4 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-foreground rounded w-full"></div>
          <div className="h-4 bg-foreground rounded w-5/6"></div>
          <div className="h-4 bg-foreground rounded w-4/6"></div>
        </div>
        <div className="space-y-4 mt-12">
          <div className="h-4 bg-foreground rounded w-full"></div>
          <div className="h-4 bg-foreground rounded w-5/6"></div>
          <div className="h-4 bg-foreground rounded w-4/6"></div>
        </div>
        <div className="space-y-4 mt-12">
          <div className="h-4 bg-foreground rounded w-full"></div>
          <div className="h-4 bg-foreground rounded w-5/6"></div>
          <div className="h-4 bg-foreground rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
