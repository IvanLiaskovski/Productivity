import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const NavItem = ({ isActive, children }) => {
  const styles = twMerge(
    "p-6 background-main-type flex justify-center items-center rounded-t-2xl text-4xl border-b-4 md:w-full md:mt-4 md:rounded-2xl",
    isActive ? "border-white" : "border-transparent",
  );

  return <div className={styles}>{children}</div>;
};

NavItem.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavItem;