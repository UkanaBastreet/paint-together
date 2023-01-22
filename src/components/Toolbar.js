const Toolbar = () => {
  return (
    <>
      <span className="Toolbar">
        <div className="tool active brush"></div>
        <div className="tool circle"></div>
        <div className="tool eraser"></div>
        <div className="tool line"></div>
        <div className="tool rect"></div>
        <div className="tool save"></div>
        <div className="tool undo"></div>
        <div className="tool redo"></div>
      </span>
    </>
  )
}
export default Toolbar

const ToolbarItem = ({ className, setTool, tool }) => {
  return (
    <>
      <div className={"tool " + className}></div>
    </>
  )
}
