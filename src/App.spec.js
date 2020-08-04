import { render } from '@testing-library/svelte';
import App from './App.svelte';

describe('something', () => {
  it('should equal true', () => {
    const { getByText } = render(App);
    expect(getByText('Hello world!')).toBeInTheDocument();
    expect(true).toBe(true);
    render;
  });
});
