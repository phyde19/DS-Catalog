import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/probability-distributions/?Discrete=true&Continuous=true')
}
