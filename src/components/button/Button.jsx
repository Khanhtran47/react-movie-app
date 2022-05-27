import PropTypes from "prop-types"

const Button = (props) => {
  return <button className={`btn ${props.className}`}>{props.children}</button>
}

export const OutlineButton = (props) => {
  return <Button className={`btn-outline ${props.className}`}>{props.children}</Button>
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
