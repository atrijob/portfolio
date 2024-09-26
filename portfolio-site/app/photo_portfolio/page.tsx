import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import ProjectPreview from "@/components/project_preview";
import Layout from "@/components/layout";
import Link from "next/link";
import projectImage from "@/public/lotus.jpg";

const PhotoPortfolio: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div>View my photos here!</div>
      <Image alt="" src={projectImage} />
      <Link className="hover:text-red-500 font-semibold underline" href="/">
        Back
      </Link>
    </div>
  );
};

export default PhotoPortfolio;
