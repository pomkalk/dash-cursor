type DonutProgressProps = {
  value: number
  size?: number
  strokeWidth?: number
  trackColor?: string
  progressColor?: string
}

export function DonutProgress({
  value,
  size = 132,
  strokeWidth = 12,
  trackColor = 'rgba(255, 255, 255, 0.24)',
  progressColor = 'rgba(255, 255, 255, 0.92)',
}: DonutProgressProps) {
  const normalized = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (normalized / 100) * circumference

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={strokeWidth} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  )
}
