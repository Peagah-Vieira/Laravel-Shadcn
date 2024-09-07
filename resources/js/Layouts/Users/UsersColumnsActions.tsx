import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { User } from "@/types"

type props = {
    user: User
}

export default function UsersColumnsActions({ user }: props) {
    const { toast } = useToast()
    return (
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => [
                navigator.clipboard.writeText(user.id.toString()),
                toast({
                    title: "Clipboard.",
                    description: "The User ID has been successfully copied.",
                })]
            } className="cursor-pointer" >
                Copy User ID
            </DropdownMenuItem >
            <DropdownMenuItem className="cursor-pointer">
                View
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
                Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}
