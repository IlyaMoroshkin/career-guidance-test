export default function DirectionCard({ direction }) {
  if (!direction) return null

  const Icon = direction.icon

  return (
    <div className="direction-card">
      <div className="direction-head">
        <div className="direction-icon">
          <Icon size={20} />
        </div>

        <div>
          <div className="direction-title">{direction.title}</div>
          <div className="direction-meta">
            {direction.code} · {direction.qualification}
          </div>
          <div className="direction-text">{direction.short}</div>
        </div>
      </div>
    </div>
  )
}