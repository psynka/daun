import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";


const BlogItem = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      <Head>
        <title>Blog page</title>
      </Head>
      {
        <div>
    
          <img src={data.url} />
          
          <br></br>

          <h1>{data.title}</h1>
        </div>
      }
    </div>
  );
};

export default BlogItem;

export async function getStaticProps(context) {
  const obj = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  ).then((res) => res.json());
  return {
    props: {
      data: obj,
    },
  };
}

export async function getStaticPaths(context) {
  return {
    paths: [ ],
    fallback: true,
  };
}