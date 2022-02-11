import Head from "next/head";

interface PageHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

/**
 * Takes the props title, description and keywords and sets them in a head tag
 * either as a title tag or inside a corresponding meta tag
 *
 * title : String
 *
 * description : String
 *
 * keywords : String
 *
 * @param props title, description, keywords
 * @returns a functional react component using the nextJs 'Head' element
 */
export const PageHead = ({ title, description, keywords }: PageHeadProps) => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        name="keywords"
        content={keywords}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
