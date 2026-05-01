export default function FormAlert({ type, message }) {
  if (!message) return null
  const ok = type === 'success'
  return (
    <div className={`alert alert-${ok ? 'success' : 'danger'} d-flex align-items-center gap-2 mt-3 rounded-3`} role="alert">
      <span>{ok ? '✅' : '⚠️'}</span>
      <span style={{ fontSize:14 }}>{message}</span>
    </div>
  )
}
