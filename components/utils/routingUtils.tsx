import { useRouter } from "next/router";

const useChangePage = (callback?: () => void) => {
  const router = useRouter();
  return (link: string) => {
    if (callback) callback();
    router.push(link);
  };
};

export default useChangePage;
