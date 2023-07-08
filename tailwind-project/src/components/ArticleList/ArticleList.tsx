import data from "../../../articles.json";
import Article from "../Article/Article";

const ArticleList = () => {
  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {data.map((d) => (
        <Article
          key={d.title}
          alt={d.alt}
          image={d.image}
          tags={d.tags}
          text={d.text}
          title={d.title}
        />
      ))}
    </div>
  );
};

export default ArticleList;
