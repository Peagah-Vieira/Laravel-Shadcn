import { useToast } from "@/hooks/use-toast"
import {
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu"
import { User } from "@/types"

type props = {
    user: User
}

export default function CopyUserId({ user }: props) {
    const { toast } = useToast()
    return (
        <DropdownMenuItem onClick={() => [
            navigator.clipboard.writeText(user.id.toString()),
            toast({
                title: "Clipboard.",
                description: "The User ID has been successfully copied.",
            })]
        } className="cursor-pointer" >
            Copy User ID
        </DropdownMenuItem >
    )
}
