import { Provider } from 'react-redux';
import './App.scss';
import router from './router';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
