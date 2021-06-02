import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import PlayerControls from '../../components/PlayerControls';

const LayoutClient = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

const ClientTemplate = ({ component, path, exact }) => {
  return (
    <LayoutClient>
      <Route exact={exact} path={path} component={component} />
    </LayoutClient>
  );
};

export default ClientTemplate;
