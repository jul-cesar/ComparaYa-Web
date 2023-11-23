export const UseFormatPrice = (price) => {
    const priceFloat = parseFloat(price)
    const formattedPrice = priceFloat.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    const decimalIndex = formattedPrice.indexOf(".");
    if (decimalIndex !== -1) {
      const priceWithoutTrailingZeros = formattedPrice.slice(
        0,
        decimalIndex + 4
      );
      return priceWithoutTrailingZeros;
    }

    return formattedPrice;
  };
