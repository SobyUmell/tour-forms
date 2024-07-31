import './FormStatic.scss'

const FormStatic = ({widget, children}) => {
  return (
    <div className="FormWidget" style={widget.styles}>
      {children}
    </div>
  );
}
 
export default FormStatic;