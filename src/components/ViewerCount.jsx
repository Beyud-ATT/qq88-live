import { useParams } from "react-router";
import useLiveDetail from "../hooks/useLiveDetail";
import { useSignalR } from "../contexts/SIgnalRContext";
import { FaRegEye } from "react-icons/fa";

export default function ViewerCount() {
  const { id } = useParams();
  const { viewer } = useSignalR();

  const { data: liveData } = useLiveDetail(id);
  const liveDetailData = liveData?.data?.data;
  const { isStreaming, viewer: liveViewer } = liveDetailData || {};

  return (
    <div className="flex items-center space-x-1 text-[var(--color-brand-primary)]">
      <FaRegEye />
      <span>
        {isStreaming && viewer !== 0
          ? viewer
          : isStreaming && liveViewer
          ? liveViewer
          : 0}
      </span>
    </div>
  );
}
