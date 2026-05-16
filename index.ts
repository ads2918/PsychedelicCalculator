import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import { handleAction, handleClick } from "./calculator.js";

const root = document.getElementById('app');
if (root) {
    root.innerHTML = `
        <div class="container py-5">
            <div class="calc-wrapper mx-auto" style="max-width: 340px;">
                <div class="calc-title text-center mb-3">Calc</div>
                <table class="table w-100 mb-0" style="border-collapse: separate; border-spacing: 4px;">
                    <tr>
                        <td colspan="4"><div id="display" class="text-end fw-bold rounded">0</div></td>
                    </tr>
                    <tr>
                        <td><button data-action="delete" class="btn btn-calc w-100"><i class="bi bi-backspace"></i></button></td>
                        <td><button data-action="%" class="btn btn-calc w-100">%</button></td>
                        <td><button data-action="clear" class="btn btn-calc w-100">C</button></td>
                        <td><button data-action="÷" class="btn btn-calc-op w-100">÷</button></td>
                    </tr>
                    <tr>
                        <td><button data-action="7" class="btn btn-calc w-100">7</button></td>
                        <td><button data-action="8" class="btn btn-calc w-100">8</button></td>
                        <td><button data-action="9" class="btn btn-calc w-100">9</button></td>
                        <td><button data-action="*" class="btn btn-calc-op w-100">×</button></td>
                    </tr>
                    <tr>
                        <td><button data-action="4" class="btn btn-calc w-100">4</button></td>
                        <td><button data-action="5" class="btn btn-calc w-100">5</button></td>
                        <td><button data-action="6" class="btn btn-calc w-100">6</button></td>
                        <td><button data-action="-" class="btn btn-calc-op w-100">−</button></td>
                    </tr>
                    <tr>
                        <td><button data-action="1" class="btn btn-calc w-100">1</button></td>
                        <td><button data-action="2" class="btn btn-calc w-100">2</button></td>
                        <td><button data-action="3" class="btn btn-calc w-100">3</button></td>
                        <td><button data-action="+" class="btn btn-calc-op w-100">+</button></td>
                    </tr>
                    <tr>
                        <td><button data-action="" class="btn btn-calc w-100">&nbsp;</button></td>
                        <td><button data-action="0" class="btn btn-calc w-100">0</button></td>
                        <td><button data-action="." class="btn btn-calc w-100">.</button></td>
                        <td><button data-action="=" class="btn btn-calc-eq w-100">=</button></td>
                    </tr>
                </table>
            </div>
        </div>
    `;

    root.addEventListener('click', (e) => {
        handleClick(e);
    })

    document.addEventListener('keydown', (e) => {
        const keyMap: { [key: string]: string } = {
            '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
            '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
            '+': '+', '-': '-', '*': '*', '/': '÷',
            '%': '%', '.': '.',
            'Enter': '=',
            'Backspace': 'delete',
            'Escape': 'clear',
        };

        const action = keyMap[e.key];
        if (action) {
           handleAction(action)
        }
    });
}

