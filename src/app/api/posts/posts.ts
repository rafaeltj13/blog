export interface Post {
  id: string;
  image: string;
  title: string;
  content: string;
  date: string;
  htmlContent: string;
}

const posts: Post[] = [
  {
    id: "1",
    image: "cfc31a16-48e0-4f31-8cab-87e9ba009b3d",
    title: "Welcome to my blog!",
    content:
      "This is my very first post! I'm excited to share my thoughts and experiences with you. I never really done anything like this before, but I'm sure I'll get the hang of it.",
    date: "2025-02-18",
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
  },
  {
    id: "2",
    title: "AI code editor battle",
    date: "2025-02-24",
    image: "cfc31a16-48e0-4f31-8cab-87e9ba009b3d",
    content:
      "I've testes all the popular code editors: Cursor, Windsurf, Trae and even Zed AI. Here are some thoughts on all of this AI stuff.",
    htmlContent: `<article class="prose lg:prose-xl dark:prose-invert  mx-auto">
        <p class="text-lg leading-relaxed mb-6">
            <a class="text-sky-500 hover:text-sky-600 transition-colors underline" href="https://cursor.sh/">Cursor</a> was the first code editor that actually implemented AI features built in. It's a great tool for developers who want to try out interact with AI.
            I was an early adopter because I do follow a lot of YouTube channels, specially related to frontend development. Before all this AI stuff, I was always trying to find a new tool that optimizes
            my workflow, that's when I discovered <a class="text-sky-500 hover:text-sky-600 transition-colors underline" href="https://zed.dev/">Zed</a>.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Zed</h2>
        <p class="text-lg leading-relaxed mb-6">
            For me Zed is the most interesting code editor, even though the AI features are still in early stages. It is the only one that is not a fork of VSCode. Everything is new and looks really awesome, comparing to
            VSCode the features are still lacking a lot, but we can definitely feel the progress when using that overtime. Zen is still a great tool and I built this website using it, usually in
            work environments I tend to use the most powerful tool for the job, but working in personal project I'm more free to test new tools and for an open source tool Zen is amazing!
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Cursor</h2>
        <p class="text-lg leading-relaxed mb-6">
            Cursor was my first AI code editor and I fell in love immediately. I started using cursor before them dominating everything and I think it was the first tool that I actually told anyone that I knew about it.
            My friends had the same reaction, it blows everyone's mind! Everyone started adopting AI tools to their workflows and seemed like cursor became the standard for AI code editors. I was lucky to get the subscription paid and when I got laid off, I started to doubt the price asked for the product.
        </p>

        <p class="text-lg leading-relaxed mb-6">
            After more than 6 months into the Cursor era, a lot of alternatives were introduced to the market. It was cheaper options that offered the same features as cursor but in a pretty layout, so I used my personal projects to test it out because I could not abandon cursor in my workflow, it was that important.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Windsurf</h2>
        <p class="text-lg leading-relaxed mb-6">
            The second code editor that I've tried was <a class="text-sky-500 hover:text-sky-600 transition-colors underline" href="https://windsurfapp.com/">windsurf</a>. My first two experiences with the tool were horrible, something was always broken and it felt like it was not worth the price. The second try the ask for AI button option was not working, it was a bit frustrating.
        </p>

        <p class="text-lg leading-relaxed mb-6">
            In the third wave of windsurf I gave it another shot and it felt completely different. It was a bit slower than cursor but it was more stable and it felt like it was worth the price. It is definitely prettier and for my workflow it fitted really well.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Trae</h2>
        <p class="text-lg leading-relaxed mb-6">
            The last one that I tried was <a class="text-sky-500 hover:text-sky-600 transition-colors underline" href="https://trae.ai/">Trae</a>, and is the first one that is completely free. It made me change my mind about paying for products like that, it has all the most important features and it is very beautiful to look at. It is definitely slower than cursor but considering that's a free tool it is definitely worth it.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="text-lg leading-relaxed mb-6">
            Nowadays there's a lot of AI tools that can be introduced to our workflows. There's a lot of code editors and even very powerful VSCode extensions that we can use and when I think about paying a subscription for a product that offers those features that are available everywhere, it seems like is not worth it.
        </p>

        <p class="text-lg leading-relaxed mb-6">
            Cursor is definitely the best tool, but Trae is a free tool so it is a little bit hard for me to recommend paying for it. There's also Zen which is free and a really different alternative than just adding AI features and charging for a subscription in an open source project.
        </p>

        <p class="text-lg leading-relaxed mb-6">
            But recently I became a little bit skeptical about introducing that many AI features to our workflows. It's a lot of work to maintain and update those features, and it's not always clear what the benefits are. It can definitely help on doing some repetitive work but using those tools can be a bit overwhelming. It can take over really quick and you can easily start to depend on it, that's why I decided to use Zen for this website, I felt like I need a break and let my mind think for a little bit. But in the end the most important thing is to use what you feel comfortable with and what works for you.
        </p>
    </article>
    `,
  },
];

export default posts;
