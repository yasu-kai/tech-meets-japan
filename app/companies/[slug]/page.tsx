import { redirect } from "next/navigation";
import { products } from "@/lib/data";

export default async function LegacyCompanyPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find(p=>p.companySlug===slug);
  redirect(product ? "/products/"+product.slug : "/products");
}
