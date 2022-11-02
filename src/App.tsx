import { useState } from 'react';
import Confirmed from 'components/molecules/Confirmed';
import Form from 'components/molecules/Form';
import './styles/style.scss';
import FormInfo from 'components/molecules/FormInfo';
import ConfirmedInfo from 'components/molecules/ConfirmedInfo';

const App = () => {
  const initialFormState = {
    name: '',
    company: '',
    street: '',
    streetNumber: '',
    city: '',
    zipCode: '',
    province: '',
    prefix: '+48',
    telephone: '',
    email: '',
    pesel: '',
    nip: '',
  };

  const [formValue, setFormValue] = useState(initialFormState);

  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      {!isConfirmed ? (
        <div className="app">
          <FormInfo />
          <Form {...{ setFormValue, setIsConfirmed }} />
        </div>
      ) : null}
      {isConfirmed ? (
        <div className="app">
          <ConfirmedInfo />
          <Confirmed {...formValue} />
        </div>
      ) : null}
    </>
  );
};

export default App;
