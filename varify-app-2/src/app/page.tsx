import { data } from "@/data/path";
import { Button, Heading, UIProvider } from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <UIProvider>
      <main
        style={{
          width: "75%",
          margin: "auto",
        }}
      >
        <Heading textAlign={"center"}>Next.js検証アプリ</Heading>

        <section
          style={{
            width: "30%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div>
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  marginTop: 10,
                }}
              >
                <Link href={item.path}>
                  <Button>{item.pageName}</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </UIProvider>
  );
}
