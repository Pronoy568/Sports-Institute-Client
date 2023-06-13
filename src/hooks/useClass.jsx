import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClass = () => {
  const { user } = useAuth();
  const {
    data: allClass = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://sports-institute-server.vercel.app/allClass`
      );
      return res.json();
    },
  });

  return [allClass, loading, refetch];
};

export default useClass;
