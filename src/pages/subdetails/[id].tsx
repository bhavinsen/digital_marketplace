import React from "react";
import { withRouter } from "next/router";
import styles from "../components/fetchimage.module.css";
import { imagedata } from "../../../imagedata.json";

const Subdetails = ({ router }: any) => {
  const { id } = router.query;
  const filterdata = imagedata && imagedata.filter((value) => {
    if (value.id === id) {
      return value;
    }
  });

  return (
    <>
      {filterdata &&
        filterdata?.map((data) => {
          return (
            <>
              <div className="dmheading bg-purple-600 bg-opacity-50 text-center pt-8 pb-36">
                <div className={`${styles.counteroneshape3}`}></div>
                <h1 className="text-3xl font-semibold text-purple-700">{data?.title}</h1>
              </div>
              <div className="container mx-auto bg-white shadow-md rounded-2xl -m-24 p-4">
                <div className="lg:grid lg:grid-cols-3 gap-4">
                  <div
                    className={`${styles.fetchimagewrappperstyle} ${styles.fetchimagewrappper} overflow-hidden rounded-2xl lg:mb-0 mb-3`}
                  >
                    <img src={data.image} alt="Digital Marketing" height={500} width={500} />
                  </div>
                  <div className="col-span-2">
                    <div className="text-gray-800 lg:text-lg mb-3">{data?.subtitle}</div>
                    <div className="text-gray-800 lg:text-lg">{data?.description}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default withRouter(Subdetails);
