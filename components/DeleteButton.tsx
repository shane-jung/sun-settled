import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DeleteButton({
  children,
  resourceId,
  route,
  redirect,
  ...restProps
}: {
  redirect?: string
  route: string
  resourceId: string
  children?: React.ReactNode
}) {
  const router = useRouter()
  const handleDelete = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`/api/${route}?id=${resourceId}`, {
      method: "DELETE",
    })

    if (res.ok) {
      if (redirect) router.push(redirect)
    }
  }

  return (
    <button className="btn-danger  p-2.5" {...restProps} onClick={handleDelete}>
      <Trash className=" h-4 w-4" />
      {children}
    </button>
  )
}
