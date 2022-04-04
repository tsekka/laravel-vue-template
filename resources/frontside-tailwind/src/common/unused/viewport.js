export const getDistanceFromRight = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return ;
  const fromRight = document.documentElement.clientWidth - rect.left;
  return fromRight;
};

export const getWidth = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return null;
  return rect.width;
};

export const getHeight = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return null;
  return rect.height;
};

export const isTowardsLeft = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return null;
  const fromRight = document.documentElement.clientWidth - rect.left;
  return rect.left < fromRight;
};

export const isTowardsTop = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return null;
  const fromBottom = document.documentElement.clientHeight - rect.top;
  return rect.top < fromBottom;
};

export const isInViewport = function (querySelector) {
  const rect = getRect(querySelector);
  if (!rect) return null;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// export const scrollIntoViewIfNeeded = function(
//     querySelector,
//     behavior = "smooth",
//     block = "center"
// ) {
//     let el = document.getElementById(querySelector);
//     if (!el) return null;
//     el.scrollIntoViewIfNeeded({ behavior, block });
// };

/**
 * @function scrollIntoView
 * @return {Obj} BoundingClientRec
 */
export const scrollIntoView = function (
  querySelector,
  behavior = "smooth",
  block = "center",
) {
  let el = document.querySelector(querySelector);
  if (!el) return null;
  el.scrollIntoView({ behavior, block });
};

export const getRect = function (querySelector) {
  let el = document.querySelector(querySelector);
  el = el ? el.parentElement : null;

  if (el === null) {
    console.warn(
      "querySelector(" + querySelector + ") not found - can't get rect.",
    );
    return null;
  }

  const rect = el.getBoundingClientRect();
  return rect;
  //   return {
  //     x: rect.x,
  //     y: rect.y,
  //     width: rect.width,
  //     height: rect.height,
  //     top: rect.top,
  //     right: rect.right,
  //     bottom: rect.bottom,
  //     left: rect.left,
  //   };
};
