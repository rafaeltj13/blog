import dayjs from "dayjs";

interface Post {
  id: string;
  title: string;
  htmlContent: string;
  date: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${params.slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const article: Post = await response.json();
  const formattedDate = dayjs(article.date).format("MMMM D, YYYY");

  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-primary">#{article.id}</span> - {article.title}
      </h1>
      <p className="text-foreground/80 mb-4">{formattedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
    </div>
  );
}

// Optionally, add error handling
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-500">Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Optionally, add loading state
export function Loading() {
  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
