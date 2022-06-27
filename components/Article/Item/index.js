import Link from 'next/link';
import ArticleStyles from '../../../styles/Article.module.css';

export default function index({ article, path }) {
  return (
    <Link href={`/${path}/[id]`} as={`/${path}/${article.id}`}>
      <a className={ArticleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}
