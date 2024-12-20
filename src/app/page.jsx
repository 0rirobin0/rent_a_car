import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen ">
  <div className="flex-none border w-14 ...">
    01
  </div>
  <div className="flex-none border w-64 ...">
    02
  </div>
  <div className="flex-auto border w-64 ...">
    03
  </div>
</div>
  );
}
