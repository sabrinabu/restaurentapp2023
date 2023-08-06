import "./increasedecrease.scss";

type IncreaseDecreaseProps = {
  id: number;
  quantity: number;
  onButtonClick: (id: number, operation: string) => void;
};

export const IncreaseDecrease = ({
  id,
  quantity,
  onButtonClick: onButtonClick,
}: IncreaseDecreaseProps) => {
  const handleQtyChange = (id: number, operation: string) => {
    onButtonClick(id, operation);
  };

  return (
    <div className="amount">
      <button
        className="changeButton"
        onClick={() => handleQtyChange(id, "minus")}
        disabled={quantity <= 0 ? true : false}
      >
        -
      </button>
      <span className="qty">{quantity}</span>
      <button
        className="changeButton"
        onClick={() => handleQtyChange(id, "plus")}
        disabled={quantity >= 10 ? true : false}
      >
        +
      </button>
    </div>
  );
};
