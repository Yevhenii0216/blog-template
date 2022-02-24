import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { InferGetStaticPropsType } from "next";
import { allOtherPages } from "contentlayer/generated";

const DEFAULT_LAYOUT = "PolicyLayout";

export const getStaticProps = async () => {
  const policy = allOtherPages.find((p) => p.slug === "privacy-policy");
  return { props: { policy } };
};

export default function PrivacyPolicy({ policy }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={policy.layout || DEFAULT_LAYOUT} content={policy} />;
}
