import { FormDataType } from 'components/molecules/Confirmed/confirmed.models.d';
import { FormProps } from './Form.models.d';

export const FormData: FormProps = {
  radioPerson: 'Klient indywidualny',
  radioCompany: 'Firma',
  personName: 'Imię i Nazwisko:',
  companyName: 'Firma:',
  adressLabel: 'Ulica, nr domu:',
  cityLabel: 'Miejscowość, kod pocztowy:',
  provinceLabel: 'Województwo',
  telephoneLabel: 'Telefon:',
  emailLabel: 'Email:',
  peselLabel: 'PESEL:',
  nipLabel: 'NIP:',
  buttonLabel: 'Zapisz',
  errorLabel: 'Wystąpił Błąd',
  legal: 'legal',
  legalStatus: 'Status Prawny:',
  saveButtonVariant: 'save' /* save or cancel */,
  cancelButtonVariant: 'cancel' /* save or cancel */,
};

export const NameFormData: FormDataType = {
  name: 'name',
  street: 'street',
  city: 'city',
  company: 'company',
  email: 'email',
  streetNumber: 'streetNumber',
  nip: 'nip',
  pesel: 'pesel',
  prefix: 'prefix',
  province: 'province',
  telephone: 'telephone',
  zipCode: 'zipCode',
};
