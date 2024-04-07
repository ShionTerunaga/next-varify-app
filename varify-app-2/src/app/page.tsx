"use client";

import { userData } from "@/shared/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("man");
  const [introduction, setIntroduction] = useState<string>("");

  const [isError, setIsError] = useState<boolean>(false);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleChangeIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };

  const onClick = () => {
    if (!name || !introduction) {
      setIsError(true);
    } else {
      setIsError(false);

      const data: userData = {
        name: name,
        gender: gender,
        introduction: introduction,
      };

      const sendData = JSON.stringify(data);

      router.push(`/page2?data=${sendData}`);
    }
  };

  return (
    <main
      style={{
        width: "75%",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Next.js検証アプリ</h1>

      <section
        style={{
          width: "30%",
          margin: "auto",
        }}
      >
        <div>
          <h2>名前</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div>
          <h2>性別</h2>
          <select
            name="gender"
            value={gender}
            onChange={(e) => handleChangeGender(e)}
          >
            <option value="man">男</option>
            <option value="woman">女</option>
          </select>
        </div>
        <div>
          <h2>自己紹介(軽く)</h2>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            value={introduction}
            onChange={(e) => handleChangeIntroduction(e)}
          />
        </div>
        {isError && (
          <div>
            <p>抜け漏れがあります</p>
          </div>
        )}
        <div>
          <button onClick={onClick}>submit</button>
        </div>
      </section>
    </main>
  );
}
