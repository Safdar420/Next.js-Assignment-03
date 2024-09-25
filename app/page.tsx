import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <>
    <ul className="inline-block">
      <li> <Link href={'/'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </ul>
    <img src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=" alt="" />
    <Footer/>
   </>
  );
}
