import type { Metadata } from "next";
import { getAllPropertiesForAdmin, getAllRequirementsForAdmin } from "@/lib/data";
import { signOut } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { PropertyForm } from "@/components/admin/property-form";
import { PropertyList } from "@/components/admin/property-list";
import { RequirementForm } from "@/components/admin/requirement-form";
import { RequirementList } from "@/components/admin/requirement-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const [properties, requirements] = await Promise.all([
    getAllPropertiesForAdmin(),
    getAllRequirementsForAdmin(),
  ]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-14 sm:px-0">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-terracotta uppercase">
            AB Realty Admin
          </p>
          <h1 className="font-heading text-3xl">Dashboard</h1>
        </div>
        <form action={signOut}>
          <Button type="submit" variant="outline">
            Sign out
          </Button>
        </form>
      </div>

      <div className="grid gap-16">
        <div>
          <h2 className="font-heading text-2xl">Properties</h2>
          <PropertyForm />
          <PropertyList properties={properties} />
        </div>

        <div>
          <h2 className="font-heading text-2xl">Requirements Board</h2>
          <RequirementForm />
          <RequirementList requirements={requirements} />
        </div>
      </div>
    </section>
  );
}
