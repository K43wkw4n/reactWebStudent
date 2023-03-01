import Swal from "sweetalert2";

export function ConfirmDialog(
  icon,
  title,
  text,
  timer,
  showConfirmButton,
  showCancelButton
) {
  return Swal.fire({
    confirmButtonText: "ตกลง",
    cancelButtonText: "ยกเลิก",
    showCloseButton: false,
    showCancelButton: showCancelButton,
    showConfirmButton: showConfirmButton,
    focusConfirm: false,
    icon: icon,
    title: title,
    text: text,
    timer: timer,
  });
}
