const filters = {
  capitalizeName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  floatToLocaleCurrency(value) {
    return new Intl.NumberFormat("us-EN", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }
}

export default {
  filters
}
