import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "@/components/project_preview";
import Layout from "@/components/layout";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Photography",
    desc: "My photo portfolio",
    linkUrl: "/photo_portfolio",
  });

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex justify-center">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
