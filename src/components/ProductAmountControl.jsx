import PropTypes from "prop-types";

function ProductAmountControl({ amount, setAmount }) {
  const increment = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev < 1) return 1;
      return prev + 1;
    });
  };

  const decrement = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev <= 1) return 1;
      return prev - 1;
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (!isNaN(parseInt(value, 10))) {
      setAmount(parseInt(value, 10));
    } else {
      setAmount(value);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleChange}
        min={1}
      />
      <button onClick={increment}>+</button>
    </div>
  );
}

ProductAmountControl.propTypes = {};

export default ProductAmountControl;
