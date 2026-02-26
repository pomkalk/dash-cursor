import { Avatar } from '../../components/Avatar'

type UserMenuProps = {
  user: {
    name: string
    role: string
    avatarUrl?: string
  }
}

export function UserMenu({ user }: UserMenuProps) {
  return <Avatar name={user.name} role={user.role} src={user.avatarUrl} />
}
