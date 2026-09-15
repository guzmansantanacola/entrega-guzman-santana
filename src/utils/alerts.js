import Swal from "sweetalert2";

const lumenAlert = Swal.mixin({
  customClass: {
    popup: "lumen-alert",
    title: "lumen-alert__title",
    htmlContainer: "lumen-alert__text",
    confirmButton: "lumen-alert__confirm",
    cancelButton: "lumen-alert__cancel",
  },
  buttonsStyling: false,
  background: "#fffdf8",
  color: "#172121",
});

export const showAddedAlert = (productTitle) =>
  lumenAlert.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    iconColor: "#39816c",
    title: "Agregado a tu bolsa",
    text: productTitle,
    showConfirmButton: false,
    timer: 2600,
    timerProgressBar: true,
  });

export const showStockError = (stock) =>
  lumenAlert.fire({
    toast: true,
    position: "top-end",
    icon: "warning",
    iconColor: "#e9573b",
    title: "Stock insuficiente",
    text: `Solo hay ${stock} unidades disponibles de este producto.`,
    showConfirmButton: false,
    timer: 3200,
    timerProgressBar: true,
  });

export const showPurchaseSuccess = (orderId) =>
  lumenAlert.fire({
    icon: "success",
    iconColor: "#39816c",
    title: "Compra confirmada",
    text: orderId
      ? `Tu pedido ${orderId} fue creado correctamente.`
      : "Tu pedido fue creado correctamente.",
    confirmButtonText: "Volver al inicio",
  });

export const showPurchaseError = () =>
  lumenAlert.fire({
    icon: "error",
    iconColor: "#e9573b",
    title: "No pudimos completar la compra",
    text: "Revisá tus datos e intentá nuevamente.",
    confirmButtonText: "Entendido",
  });
