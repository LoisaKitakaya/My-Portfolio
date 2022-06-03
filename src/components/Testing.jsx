import { useQuery, gql } from "@apollo/client";

const Article = gql`
  query Article($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
      tags
      date
      authors {
        id
        name
      }
    }
  }
`;

const Testing = () => {
  const slug = "web-development-in-2022";
  
  const { loading, error, data } = useQuery(Article, {
    variables: {slug},
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>Got it the article.</p>;
};

export default Testing;
