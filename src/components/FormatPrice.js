const FormatPrice = ({ price }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  });
  // console.log(price);
  return formatter.format(price);
};

export default FormatPrice;
