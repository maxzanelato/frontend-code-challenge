export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      className="border-r-8 bg-[#E9EAEB] p-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
