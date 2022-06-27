import React from 'react';
import Link from 'next/link';
//import { useRouter } from 'next/router';

export default function index({ article }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1> {article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Back to home</Link>
    </>
  );
}

// SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await response.json();
//
//   return {
//     props: {
//       article,
//     },
//   };
// }

//STATIC SITE GENERATION
//this first one tells next.js how many pages need to be made with our data
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await response.json();

  const paths = articles.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

//And for each of one of those pages will run this function to fetch the data we need
export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  return { props: { article: data } };
}
