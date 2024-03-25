"use client";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.prefetch("/login");
  return (
    <div className="flex justify-center align-middle">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Manage Expenses <br /> the right way
          <br />
        </motion.h1>
      </LampContainer>
      <motion.div
        className="fixed bottom-40 "
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <Link href="/login">
          <Button className="w-52  transition hover:scale-110 hover:duration-200">
            Login
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
