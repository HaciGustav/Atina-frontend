import React, { useEffect } from "react";

import UsersTable from "../components/tables/UsersTable";
import useAtinaCalls from "../hooks/useAtinaCalls";

const AtinaUsers = () => {
  const { getUsersData } = useAtinaCalls();
  useEffect(() => {
    getUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <UsersTable />
    </div>
  );
};

export default AtinaUsers;
