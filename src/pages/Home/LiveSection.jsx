import { Col, Image, Row, Spin } from "antd";
import useLiveHot from "../../hooks/useLiveHot";
import LivestreamPlayer from "../../components/VideoPlayer";
import { useEffect, useState } from "react";

import Home from "../../assets/home.gif";
import MainLive from "../../assets/main-live.webp";
import { Link } from "react-router";

const imageStyle =
  "md:!w-[85%] md:!h-auto !w-[100px] !h-[55px] mx-auto object-cover aspect-video p-0.5 rounded-lg cursor-pointer";

const LiveSection = () => {
  const { data, isLoading } = useLiveHot();
  const liveData = data?.data?.data;
  const isJustifyBetween = liveData?.length >= 4;
  const [selectedStream, setSelectedStream] = useState(
    liveData?.at(0)?.streamId
  );

  useEffect(() => {
    if (liveData) {
      setSelectedStream(liveData?.at(0)?.streamId);
    }
  }, [liveData]);

  return (
    <Row className="md:pt-4 pt-2">
      {/* Main Stream */}
      <Col xs={{ flex: "100%" }} md={{ flex: "80%" }}>
        <LivestreamPlayer liveId={selectedStream} />
      </Col>

      {/* Side Streams */}
      <Col
        xs={{ flex: "100%" }}
        md={{ flex: "20%" }}
        className="overflow-hidden"
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spin />
          </div>
        ) : (
          <ul
            className={`flex md:flex-col ${
              isJustifyBetween ? "justify-between" : "gap-y-[1%]"
            } h-full md:mt-0 mt-2`}
          >
            <li>
              <Link to="https://qq88.io/trangchu" target="_blank">
                <Image
                  src={Home}
                  preview={false}
                  loading="lazy"
                  className={imageStyle}
                />
              </Link>
            </li>
            {liveData?.map((stream, index) => {
              const isSelected = selectedStream
                ? stream.streamId === selectedStream
                : index === 0;
              return (
                <li
                  key={index}
                  className="relative"
                  onClick={() => setSelectedStream(stream.streamId)}
                >
                  <Image
                    alt="Stream"
                    src={stream?.thumbnail || MainLive}
                    className={`${imageStyle} ${
                      isSelected ? "bg-[var(--color-brand-primary)]" : ""
                    }`}
                    loading="lazy"
                    preview={false}
                    wrapperClassName="z-10"
                  />
                  <i
                    className={`${
                      isSelected
                        ? "qq88-icon-banner-arrow-left z-0 md:block hidden"
                        : ""
                    }`}
                  ></i>
                </li>
              );
            })}
          </ul>
        )}
      </Col>
    </Row>
  );
};

export default LiveSection;
