import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../store/slices/AnswerSlice";
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message";
import { Alert } from "@mui/material";
const InputStatic = ({widget}) => {

  const {
    register,
    formState: { errors },
  } = useForm()

  return (
    <>
      <input
       type="text"
       placeholder={widget.attributes.placeholder} 
       style={widget.styles} 
       {...register(widget.name, { ...( widget.attributes.isRequired && { required: "This field is required" }) })}
      />
      <ErrorMessage
        errors={errors}
        name={widget.name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
    </>
  );
}
 
export default InputStatic;