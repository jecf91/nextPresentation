import ArticleItem from '../Item';
import ArticleStyles from '../../../styles/Article.module.css';

export default function index({ articles, path }) {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem path={path} article={article} />
      ))}
    </div>
  );
}
