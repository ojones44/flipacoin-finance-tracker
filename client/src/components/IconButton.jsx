function IconButton({ btnType, classes, onClick, icon, isLoading }) {
  return (
    <button
      type={btnType}
      className={`icon-btn ${classes}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {icon}
    </button>
  );
}
export default IconButton;
