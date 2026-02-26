import { observer } from 'mobx-react-lite'
import { IconButton } from '../../components/IconButton'
import { themeStore } from '../../stores/themeStore'

export const TopActionIcons = observer(function TopActionIcons() {
  const isDark = themeStore.mode === 'dark'

  return (
    <div className="hidden items-center gap-1 sm:flex">
      <IconButton
        label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        icon={<span>{isDark ? '☀' : '☾'}</span>}
        onClick={() => themeStore.toggleMode()}
      />
      <IconButton label="Notifications" icon={<span>◌</span>} />
    </div>
  )
})
