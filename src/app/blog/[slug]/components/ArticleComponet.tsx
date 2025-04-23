import styles from "../BlogArticle.module.css";

const relatedArticles = [
  {
    id: 1,
    category: "Category A",
    title: "How Starburst fixed 350 user access gaps and saved $57,000 in underused licenses in 2 months",
    summary: "This is the post summary of this article. It is a two-lined sentence.",
    image: "/images/article1.jpg",
    link: "/blog/starburst-case-study",
  },
  {
    id: 2,
    category: "Category B",
    title: "How to manage external users",
    summary: "This is the post summary of this article. It is a two-lined sentence.",
    image: "/images/article2.jpg",
    link: "/blog/manage-external-users",
  },
  {
    id: 3,
    category: "Category C",
    title: "Introducing Stitchflow: A Visibility Platform for Corporate IT teams",
    summary: "This is the post summary of this article. It is a two-lined sentence.",
    image: "/images/article3.jpg",
    link: "/blog/stitchflow-intro",
  },
];

const RelatedArticles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {relatedArticles.map((article) => (
          <a key={article.id} href={article.link} className={styles.card}>
            <div className={styles.imageWrapper}>
              {/* <Image src={article.image} alt={article.title} width={300} height={180} className={styles.image} /> */}
            </div>
            <div className={styles.content}>
              <p className={styles.category}>{article.category}</p>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.summary}>{article.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
