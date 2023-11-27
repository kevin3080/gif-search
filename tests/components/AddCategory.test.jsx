import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de testo', () => {
    // Se crea el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);

    //capturo un evento
    const input = screen.getByRole('textbox');
    // llamo al evento
    fireEvent.input(input, { target: { value: 'Saitama' } });
    // espero que el evento tenga el value en "Saitama"
    expect(input.value).toBe('Saitama');
    // imprimo en consola
    screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    // TODO:
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1); // llamada solo una vez
    // expect().toHaveBeenCalled(); --> estamos comprobando que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // esta funcion si esta evaluando que sea llamada con el valor de la caja de texto inputValue
  });

  test('no debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    // tambien podemos usar la negacion:
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
