"use client";

import { userData } from "@/shared/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page2 = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("data");
  const [data, setData] = useState<userData | undefined>(undefined);
  useEffect(() => {
    if (param) {
      const paramData: userData = JSON.parse(param);
      setData(paramData);
    }
  }, [param]);

  return (
    <>
      {data ? (
        <main>
          <h1>{`hello ${data.name}`}</h1>
          <ul>
            <li>名前：{data.name}</li>
            <li>性別：{data.gender}</li>
            <li>自己紹介：{data.introduction}</li>
          </ul>
        </main>
      ) : (
        <main>
          <h1>undefined your data</h1>
        </main>
      )}
    </>
  );
};

export default Page2;
