import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-20 sm:px-0">
      <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
        AB Realty Admin
      </p>
      <h1 className="mb-8 font-heading text-3xl">Sign in</h1>
      <LoginForm />
    </section>
  );
}
