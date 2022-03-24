import { useRouter } from "next/router";
import { setPageContent } from "../../stateManagement/contentSlice";
import store from "../../stateManagement/store";

const useChangePage = (callback?: () => void) => {
  const router = useRouter();
  return (link: string) => {
    if (callback) callback();
    router.push(link);
  };
};

export default useChangePage;
