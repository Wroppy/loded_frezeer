"use client";

import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import FlatSummary from "@/app/settings/flat-manager/flat-summary/flat-summary";
import NoFlat from "@/app/settings/flat-manager/enter-flat/no-flat";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./loading";

const FlatManager = () => {
  const [loading, setLoading] = useState(true);
  const [flatData, setFlatData] = useState({ flatName: "", joinCode: "" });

  const fetchFlatData = async () => {
    // Fetch flat data here
    setTimeout(() => {
      setFlatData({ flatName: "flat name", joinCode: "abcdefgh" });
      setLoading(false);
    }, 3000);
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
        />
      )}
    </div>
  );
};

export default FlatManager;
