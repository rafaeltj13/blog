import dayjs from "dayjs";

export default function BlogPostPage() {
  const article = {
    id: "1",
    title: "How to Build a Personal Blog with Next.js",
    htmlContent: `<article class="prose lg:prose-xl dark:prose-invert">
        <div class="my-4 p-4 bg-card rounded-lg shadow-lg">
          <p class="text-lg leading-relaxed">Building a personal blog with Next.js is an exciting project that can help you learn modern web development concepts while creating something useful.</p>
        </div>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <p>First, let's create a new Next.js project using the following command:</p>
        <pre class="bg-card p-4 rounded-lg overflow-x-auto"><code class="text-sm font-mono">npx create-next-app@latest my-blog</code></pre>
        
        <div class="my-8 p-6 border-l-4 border-primary bg-card/50 rounded-r-lg">
          <h3 class="text-xl font-semibold mb-2">Pro Tip</h3>
          <p>When setting up your Next.js project, consider using TypeScript from the start. It will help catch errors early and improve code maintainability.</p>
        </div>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Project Structure</h2>
        <p>Next.js provides a great file-based routing system. Here's how we'll organize our blog:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-card p-4 rounded-lg">
            <h4 class="font-bold mb-2">Frontend Structure</h4>
            <ul class="list-disc list-inside space-y-2">
              <li>pages/: Contains all our routes</li>
              <li>components/: Reusable UI components</li>
              <li>styles/: CSS and styling files</li>
              <li>public/: Static assets like images</li>
            </ul>
          </div>
          <div class="bg-card p-4 rounded-lg">
            <h4 class="font-bold mb-2">Additional Folders</h4>
            <ul class="list-disc list-inside space-y-2">
              <li>lib/: Utility functions</li>
              <li>hooks/: Custom React hooks</li>
              <li>types/: TypeScript definitions</li>
              <li>content/: Blog posts and MDX files</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Styling Your Blog</h2>
        <div class="space-y-4">
          <p>We'll use Tailwind CSS for styling our blog. It provides utility classes that make it easy to create responsive designs.</p>
          
          <div class="flex flex-col md:flex-row gap-4 my-6">
            <div class="flex-1 p-4 bg-card rounded-lg">
              <h4 class="font-bold mb-2">Pros</h4>
              <ul class="list-none space-y-2">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span> Utility-first approach
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span> Highly customizable
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span> Great documentation
                </li>
              </ul>
            </div>
            <div class="flex-1 p-4 bg-card rounded-lg">
              <h4 class="font-bold mb-2">Cons</h4>
              <ul class="list-none space-y-2">
                <li class="flex items-center gap-2">
                  <span class="text-red-500">×</span> Learning curve
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-red-500">×</span> Long class names
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <div class="bg-card/50 p-6 rounded-lg shadow-inner">
          <p class="text-lg">With these basics in place, you now have a foundation for building your personal blog. Keep exploring and adding features as you go!</p>
          <div class="mt-4 p-4 bg-primary/10 rounded-lg">
            <p class="font-semibold">Next Steps:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Add authentication</li>
              <li>Implement comments system</li>
              <li>Set up analytics</li>
              <li>Add RSS feed</li>
            </ul>
          </div>
        </div>
      </article>`,
    date: "2023-01-01",
  };

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
