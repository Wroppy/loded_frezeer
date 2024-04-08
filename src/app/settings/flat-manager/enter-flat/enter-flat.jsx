"use client";

import { useState } from "react";
import CreateFlatForm from "@/app/settings/flat-manager/enter-flat/create-flat-form";
import JoinFlat from "@/app/settings/flat-manager/enter-flat/join-flat";
import styles from "@/app/settings/settings.module.css";

const EnterFlat = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={`${styles.enterFlat}`}>
      <CreateFlatForm loading={loading} setLoading={setLoading} />
      <JoinFlat loading={loading} setLoading={setLoading} />
    </div>
  );
};

export default EnterFlat;
