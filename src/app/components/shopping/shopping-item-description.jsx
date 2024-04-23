/***
 * Returns no description if there is no description
 * @param {string} description
 * @returns {JSX.Element}
 */
const ShoppingItemDescription = ({ description }) => {
  return description ? (
    <>
      <div>Description:</div>
      <div>{description}</div>
    </>
  ) : (
    <>No Description</>
  );
};

export default ShoppingItemDescription;
