export function Header() {
  return (
    <div
      className={`
        flex
        items-center justify-center
        px-2 py-1.5
        border-2 border-solid border-black
        w-fit
      `}
    >
      <h1
        className={`
          text-3xl
          font-bold
        `}
      >
        React + Zustand Playground
      </h1>
    </div>
  )
}

export default Header
