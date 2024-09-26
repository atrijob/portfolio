import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
  title: string;
  desc: string;
  linkUrl: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
  return (
    <div className="flex gap-4 bg-sky-50 p-2 border border-slate-900">
      <div className="relative w-24 h-16">
        <Image src={"/cat.jpg"} layout="fill" />
      </div>

      <div className="my-auto">
        <Link
          className="font-bold underline hover:text-orange-500"
          href={props.linkUrl}
        >
          {props.title}
        </Link>

        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
