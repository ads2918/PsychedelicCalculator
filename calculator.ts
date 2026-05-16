const buttonValues: string[] = ["%", "delete", "clear", "÷", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
const SAFE_EXPR = /^[0-9+\-*/.%÷]+$/;

export function handleAction(action: string): void {
  const display = document.getElementById("display");
  if (!display || !buttonValues.includes(action)) return;

  if (action === "clear") {
      display.textContent = "0";
  } else if (action === "=") {
      try {
          const expr = display.textContent!.trim().replace(/÷/g, '/');
          if (SAFE_EXPR.test(expr)) {
              display.textContent = String(new Function(`return ${expr}`)());
          }
      } catch {
          // invalid expression — do nothing
      }
  } else if (action === "delete") {
      const val = display.textContent!.slice(0, -1);
      display.textContent = val || "0";
  } else {
      if (display.textContent === "0") display.textContent = "";
      display.textContent += action;
  }
}

export function handleClick(e: MouseEvent): void {
    const button = (e.target as HTMLElement).closest('button');
    if (!button?.dataset.action) return;
    handleAction(button.dataset.action);
}