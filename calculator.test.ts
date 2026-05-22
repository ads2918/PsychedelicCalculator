import { handleAction } from './calculator';

describe('handleAction', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="display">0</div>';
  });

  test('adds digits to display', () => {
    handleAction('7');
    const display = document.getElementById('display');
    expect(display?.textContent).toBe('7');
  });

  test('clears display', () => {
    const display = document.getElementById('display');
    if (display) display.textContent = '123';
    handleAction('clear');
    expect(display?.textContent).toBe('0');
  });
 
  test('evaluates expression on equals', () => {
    const display = document.getElementById('display');
    if (display) display.textContent = '2+3*4';
    handleAction('=');
    expect(display?.textContent).toBe('14');
  });

  test('deletes last character', () => {
    const display = document.getElementById('display');
    if (display) display.textContent = '99';
    handleAction('delete');
    expect(display?.textContent).toBe('9');
  });

  test('evaluates division', () => {
    const display = document.getElementById('display');
    if(display) display.textContent = '9/3';
    handleAction('=');
    expect(display?.textContent).toBe('3');
  });
});
