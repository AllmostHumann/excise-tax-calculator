const FindSymbol = () => {
  const text = "American Pale ale 13,75° but. 0,5 l";

  const getSymbol = ({ text }) => {
    const symbolIndex = text.indexOf("°");
    if (symbolIndex === -1) {
      return null;
    }
    const symbolText = text.slice(symbolIndex - 5, symbolIndex + 1);
    const symbol = parseFloat(symbolText.replace(",", ".")).toFixed(2);
    return symbol;
  };

  const symbol = getSymbol({ text });

  return (
    <div>
      <p>{text}</p>
      {symbol && <p>{symbol}</p>}
    </div>
  );
};

export default FindSymbol;
