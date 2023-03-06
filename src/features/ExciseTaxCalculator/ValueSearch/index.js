const FindValue = () => {
  const text = "American Pale 13,75° but. 0,5 l";

  const getValue = ({ text }) => {
    const valueIndex = text.indexOf("°");
    const valueText = text.slice(valueIndex - 5, valueIndex + 1);
    const value = parseFloat(valueText.replace(",", ".")).toFixed(2);
    return value;
  };

  const value = getValue({ text });

  return (
    <div>
      <p>{text}</p>
      {value && <p>{value}</p>}
    </div>
  );
};

export default FindValue;
