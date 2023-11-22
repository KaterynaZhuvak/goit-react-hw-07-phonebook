import { NavLink, Route, Routes } from 'react-router-dom';
import CreateNewContact from 'pages/NewContact/CreateNewContact';
import MyContacts from 'pages/MyContacts/MyContacts';
import { StyledBook } from 'components/Styled';

export const App = () => {
  return (
    <StyledBook>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Create new contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<CreateNewContact />} />
          <Route path="/contacts" element={<MyContacts />} />
        </Routes>
      </div>
    </StyledBook>
  );
};
