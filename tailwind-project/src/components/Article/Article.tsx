interface ArticleProps {
  title: string;
  text: string;
  tags: string[];
  image?: string;
  alt?: string;
}

const Article = ({ alt, image, tags, text, title }: ArticleProps) => (
  <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
    <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
      {title}
    </h3>
    <div>{text}</div>
    <div className="flex gap-2 w-[100%]">
      {tags.map((tag) => (
        <p key={tag} className="font-bold text-alura-200">{`[${tag}]`}</p>
      ))}
    </div>
  </div>
);

export default Article;
