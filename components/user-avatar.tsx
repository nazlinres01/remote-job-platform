import type React from "react"
import { User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { UserType } from "@/components/auth-provider"

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: UserType
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.avatar ? (
        <AvatarImage alt={`${user.firstName} ${user.lastName}`} src={user.avatar || "/placeholder.svg"} />
      ) : null}
      <AvatarFallback>
        {user.firstName && user.lastName ? `${user.firstName[0]}${user.lastName[0]}` : <User className="h-4 w-4" />}
      </AvatarFallback>
    </Avatar>
  )
}
