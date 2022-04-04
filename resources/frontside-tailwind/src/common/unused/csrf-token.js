let meta = document.head.querySelector('meta[name="csrf-token"]');
let csrf = null;
if (!meta || meta.content.replace(/ /g, "") === "{{csrf_token()}}") {
  // Local development
} else if (meta) {
  csrf = meta.content;
} else {
  console.error("CSRF token not found!");
}

export default csrf;
