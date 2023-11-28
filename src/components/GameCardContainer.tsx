import { ReactNode } from "react"

interface Props {
	children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
	<div className="rounded-lg shadow-lg overflow-hidden">{children}</div>
  )
}

export default GameCardContainer