import dayjs from "dayjs";

interface Post {
  id: string;
  title: string;
  htmlContent: string;
  date: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
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
