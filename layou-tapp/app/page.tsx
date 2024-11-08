import Image from "next/image";
import Hello from "./component/Hello";
import Link from "next/link";

export default function Home() {
  console.log("Server or client")
  return (
    <div className="p-3">
    <h1 className="text-3xl">Welcome to next js module</h1>
    <Hello />
    <div>
    <Link href='/about'>About Us</Link>
    <br />
    <Link href='/dashboard'>Dashboards</Link>
    </div>
    </div>
  );
}
