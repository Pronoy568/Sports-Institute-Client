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
      const res = await fetch(`http://localhost:5000/allClass`);
      return res.json();
    },
  });

  return [allClass, loading, refetch];
};

export default useClass;
