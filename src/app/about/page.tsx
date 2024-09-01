import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `## Hi
My name is Ayush Chandan and this blog post is just for my brain vomit. This has nothing to do with my career. It's just a place for me to be myself and say whatever I want to. This gives me a space to vent and talk about thing that I like and don't like without the fear of judgement. I am also going to document my life in this blog. It's public and it's always going to be public. 

I wish to keep this hidden just for my knowledge and only open to someone that I seem worthy of knowing me fully.

![](https://fast.image.delivery/qxascel.jpg)`

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Ayush Chandan",
    openGraph: {
      title: "About Me",
      description: "Learn more about Ayush Chandan",
      images: [
        signOgImageUrl({
          title: "Ayush",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
