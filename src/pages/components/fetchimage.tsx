/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./fetchimage.module.css";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { imagedata } from "../../../imagedata.json";


const Fetchimage: NextPage = (props) => {
  const router = useRouter();

  const handleclick = (post: any) => {
    router.push({
      pathname: `/subdetails/${post.id}`
    });
  };

  return (
    <>
      <div className="dmheading bg-purple-600 bg-opacity-50 text-center pt-8 pb-36">
        <div className={`${styles.counteroneshape3}`}></div>
        <h1 className="text-3xl font-semibold text-purple-700">Digital Marketing</h1>
      </div>
      <ul className="flex flex-wrap container mx-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-24 ">
        {imagedata.map((post,i) => (
          <>
            <li
            key={i}
              className={`${styles.fetchimage} shadow-md fetchimage p-3 bg-white`}
              onClick={(): any => handleclick(post)}
            >
              <div className={`${styles.fetchimagewrappper} overflow-hidden `}>
                <img className="text-center" src={post.image} alt="Digital Marketing" width="100%" height="100%" />
              </div>
              <div className="my-3">
                <p className="text-xl font-bold mb-3">{post.title}</p>
                <p className="text-base whitespace-nowrap overflow-hidden overflow-ellipsis w-72">
                  {post.description}{" "}
                </p>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Fetchimage;
