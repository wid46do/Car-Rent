import { render, screen } from '@testing-library/react';
import App from '../App';
import Logout from '../components/Logout';

test('render logout text', () => {
  render(<Logout/>);
  const linkElement = screen.getByText("Log Out");
  expect(linkElement).toBeInTheDocument();
});
