import DynamicClientDetail from "@/components/DynamicClientDetail";
export default async function ClientPage({params}:{params:Promise<{id:string}>}){const {id}=await params;return <DynamicClientDetail id={id}/>}
