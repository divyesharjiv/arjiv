import React, { useEffect, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BASE_URL, callApi } from "utility/axios";
import { paginate } from "utility/api";
import { formatDate } from "utility/utils";
import { moduleTypes } from "Common";
import Heading from "Components/Heading";

const LiveShows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = {
        filter: {
          type: moduleTypes.NEXT_EXHIBITIONS,
        },
      };
      const [err, res] = await callApi({ ...paginate, payload: req });
      if (!err && res?.code === "OK") {
        const currentTime = new Date();
        const filterData = res?.data?.list?.filter((x) => {
          return x.isActive && currentTime <= new Date(x?.info?.toDateTime);
        });
        setData(filterData);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data?.length > 0 && (
        <section className="py-12 bg-dark">
          <div className="container mx-auto max-w-7xl px-4">
            <Heading className="text-center uppercase mb-10">
              Visit Us At
            </Heading>

            <div className="flex flex-wrap -mx-3 justify-center">
              {data.map((x, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
                  <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-full">
                    <img
                      src={BASE_URL + x?.images[0]}
                      alt={x.info.showName}
                      className="w-full h-60 object-cover bg-offwhite"
                    />
                    <div className="p-4 bg-offwhite border-t-2 border-border h-full">
                      <h4 className="sm:text-2xl text-xl font-semibold mb-2">
                        {x?.title}
                      </h4>
                      <div className="flex items-center text-gray-300 mb-2">
                        <AiTwotoneCalendar size={20} className="mr-2" />
                        <span className="text-sm sm:text-lg">
                          {formatDate(x.info.fromDateTime)} -{" "}
                          {formatDate(x.info.toDateTime)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-300 mb-2">
                        <FaLocationDot className="mr-2 text-sm sm:text-lg" />
                        <span className="text-sm sm:text-lg">
                          {x.info.address}
                        </span>
                      </div>
                      <h5 className="text-sm sm:text-lg">
                        Booth No:{" "}
                        <strong className="text-xl sm:text-2xl tracking-widest">
                          ({x.info.boothNo})
                        </strong>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LiveShows;
