// import "./form-input.styles.scss";
import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {/* if label exists, then render it () */}
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          //   className={`${
          //     otherProps.value.length ? "shrink" : ""
          //   } form-input-label`
          // }
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
