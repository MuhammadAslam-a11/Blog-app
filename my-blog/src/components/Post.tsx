// src/components/Post.tsx
export default function Post({ title, content }: { title: string, content: string }) {
    return (
      <article className="p-4 border-b">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{content}</p>
      </article>
    )
  }
  
  