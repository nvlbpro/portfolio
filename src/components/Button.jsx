/* eslint-disable react/prop-types */
function Button(props) {
  // Render a button element with the provided props
  // - onClick: Click event handler function
  // - className: CSS class for styling
  // - disabled: Flag to disable the button
  // - buttonText: Text content of the button
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
