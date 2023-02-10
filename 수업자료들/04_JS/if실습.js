//성인이거나 VIP면 통과 (or)
//성인이면서도 VIP여도 취했으면 '돌아가' (and)
//성인이 아니고 VIP도 아니면서 취했어도(and) or 돈냈음 '통과'

let Tom = {
  isAdult: false,
  VIP: false,
  isDrunken: false,
  Pay: true,
}


if ((Tom.isAdult === true || Tom.VIP === true) && Tom.isDrunken === false) {
  console.log("통과");
} else {
  if (Tom.Pay === true) {
    console.log("통과");
  } else {
    console.log("돌아가");
  }
}


if (Tom.Pay === true || (Tom.isDrunken === false && (Tom.isAdult ===true || Tom.VIP === true))) {
  console.log("통과");
} else {
  console.log("돌아가");
}