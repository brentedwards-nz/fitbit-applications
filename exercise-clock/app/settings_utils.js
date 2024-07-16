export function localExport() {
  console.log("Local export function...")
}

function globalExport() {
  console.log("Global export function...")
}

export default function defaultExport() {
  console.log("Default export function...")
}

export {
  globalExport
}