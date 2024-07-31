const ContStatic = ({widget, children}) => {
  return (
    <div className="ContStatic" style={widget.styles}>
      {children}
    </div>
  );
}
 
export default ContStatic;