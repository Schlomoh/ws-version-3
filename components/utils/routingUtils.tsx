import { useRouter } from "next/router";

const useChangePage = (callback?: () => void) => {
  const router = useRouter();
  return (link: string) => {
    router.push(link);
    if (callback) callback();
  };
};

export default useChangePage;
