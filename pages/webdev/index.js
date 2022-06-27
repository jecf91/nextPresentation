import Head from 'next/head';
import ArticleList from '../../components/Article/List';
import { server } from '../../config';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>My Blabla news</title>
        <meta
          name="keywords"
          content="web dev, programming, development, front-end"
        />
      </Head>
      <ArticleList path="webdev" articles={articles} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${server}/api/webdevarticles`);
  const articles = await response.json();

  return {
    props: { articles },
  };
}
