import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>News from Moneta</h1>
      <ul>
        <PostLink id="hello-world" />
        <PostLink id="learn-with-moneta" />
      </ul>
    </Layout>
  );
};
