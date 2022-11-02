import React from 'react';
import { FormDataType } from 'components/molecules/Confirmed/confirmed.models.d';

export type DataFormType = {
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  setFormValue: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export type FormProps = {
  radioPerson: string;
  radioCompany: string;
  personName: string;
  companyName: string;
  adressLabel: string;
  cityLabel: string;
  provinceLabel: string;
  telephoneLabel: string;
  emailLabel: string;
  peselLabel: string;
  nipLabel: string;
  buttonLabel: string;
  errorLabel: string;
  legal: string;
  legalStatus: string;
  saveButtonVariant: string;
  cancelButtonVariant: string;
};
