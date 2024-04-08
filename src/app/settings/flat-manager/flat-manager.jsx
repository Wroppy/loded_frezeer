"use client";

import styles from "@/app/settings/settings.module.css";
import FlatSummary from "@/app/settings/flat-manager/flat-summary/flat-summary";
import NoFlat from "@/app/settings/flat-manager/enter-flat/no-flat";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./loading";
import { fetchData } from "@/app/utils/clientFetch";

const FlatManager = () => {
  const [loading, setLoading] = useState(true);
  const [flatData, setFlatData] = useState({ flatName: "", joinCode: "", tenants: []});

  const fetchFlatData = async () => {
    const data = await fetchData("get-flat-settings");
    setLoading(false);
    if (data.success) {
      setFlatData(data.flat);
    }

  };

  useEffect(() => {
    fetchFlatData();
  }, []);

  return (
    <div className={styles.flatManager}>
      <h3>Manage your flat:</h3>
      {loading && <LoadingSkeleton />}
      {!loading && !flatData.flatName && <NoFlat />}
      {!loading && flatData.flatName && (
        <FlatSummary
          flatName={flatData.flatName}
          joinCode={flatData.joinCode}
          tenants={flatData.tenants}
        />
      )}
    </div>
  );
};

export default FlatManager;
