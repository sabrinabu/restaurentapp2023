import "./increasedecrease.scss";

type IncreaseDecreaseProps = {
  cartItemId: string;
  quantity: number;
  onButtonClick: (operation: string, cartItemId: string) => void;
};

export const IncreaseDecrease = ({
  cartItemId,
  quantity,
  onButtonClick,
}: IncreaseDecreaseProps) => {
  const handleQtyChange = (operation: string, cartItemId: string) => {
    onButtonClick(operation, cartItemId);
  };

  return (
    <div className="amount">
      <button
        className="changeButton"
        onClick={() => handleQtyChange("minus", cartItemId)}
        disabled={quantity <= 0 ? true : false}
      >
        -
      </button>
      <span className="qty">{quantity}</span>
      <button
        className="changeButton"
        onClick={() => handleQtyChange("plus", cartItemId)}
        disabled={quantity >= 10 ? true : false}
      >
        +
      </button>
    </div>
  );
};
