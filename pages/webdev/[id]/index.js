import React from 'react';
import Link from 'next/link';
import { server } from '../../../config';

export default function index({ article }) {
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
export async function getServerSideProps(context) {
  const response = await fetch(
    `${server}/api/webdevarticles/${context.params.id}`
  );
  const article = await response.json();
  return {
    props: {
      article,
    },
  };
}
