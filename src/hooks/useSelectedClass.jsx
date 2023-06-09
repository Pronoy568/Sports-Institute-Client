import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useSelectedClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
      return res.data;
    },
  });

  return [selectedClass, refetch];
};
export default useSelectedClass;
