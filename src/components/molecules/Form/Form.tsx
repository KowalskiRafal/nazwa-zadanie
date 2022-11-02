import React, { useEffect, useState } from 'react';
import { baseUrl } from 'api';
import RadioInput from 'components/atoms/RadioInput';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { DataFormType } from './Form.models.d';
import { FormData, NameFormData } from './Form.data';

const Form = ({ setFormValue, setIsConfirmed }: DataFormType) => {
  const {
    personName,
    adressLabel,
    buttonLabel,
    cityLabel,
    companyName,
    emailLabel,
    nipLabel,
    peselLabel,
    provinceLabel,
    radioCompany,
    radioPerson,
    telephoneLabel,
    errorLabel,
    legalStatus,
    cancelButtonVariant,
    saveButtonVariant,
  } = FormData;

  const {
    street,
    city,
    company,
    email,
    streetNumber,
    name,
    nip,
    pesel,
    prefix,
    province,
    telephone,
    zipCode,
  } = NameFormData;

  const [provinces, setProvinces] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [legal, setLegal] = useState('Klient indywidualny');

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((response) => {
        setProvinces(response);
        setError(null);
      })
      .catch((error) => setError(error));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;

    setFormValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const radioHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLOptionElement>
  ) => {
    setLegal(e.target.value);
  };

  if (error) return <p>{errorLabel}</p>;

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Dane Identyfikacyjne</h2>
        <hr />
        <div className="form__radio-input-wrapper">
          <p>{legalStatus}</p>
          <div className="form__radio-input">
            <RadioInput
              value={radioPerson}
              changed={radioHandler}
              isSelected={legal === 'Klient indywidualny'}
              htmlFor={radioPerson}
              label={radioPerson}
            />
            <RadioInput
              value={radioCompany}
              changed={radioHandler}
              isSelected={legal === 'Firma'}
              htmlFor={radioCompany}
              label={radioCompany}
            />
          </div>
        </div>
        {legal === 'Klient indywidualny' ? (
          <Input
            changed={handleChange}
            htmlFor={name}
            label={personName}
            type="text"
            name={name}
            id={name}
          />
        ) : (
          <Input
            changed={handleChange}
            htmlFor={company}
            label={companyName}
            type="text"
            name={company}
            id={company}
          />
        )}

        <Input
          changed={handleChange}
          htmlFor={street}
          label={adressLabel}
          type="text"
          name={street}
          secondName={streetNumber}
        />

        <Input
          changed={handleChange}
          htmlFor={city}
          label={cityLabel}
          type="text"
          name={city}
          secondName={zipCode}
          secondPattern="^\d{2}-\d{3}$"
        />

        <div className="form__select-wrapper">
          <label className="form__label" htmlFor={province}>
            {provinceLabel}
          </label>
          <select
            className="form__select"
            onChange={handleChange}
            name={province}
            defaultValue="Województwo"
            required
          >
            <option disabled selected value="">
              {provinceLabel}
            </option>
            {provinces.map((provinceName) => (
              <option value={provinceName} key={provinceName}>
                {provinceName}
              </option>
            ))}
          </select>
        </div>

        <Input
          changed={handleChange}
          htmlFor={telephone}
          label={telephoneLabel}
          type="text"
          name={telephone}
          secondName={prefix}
          value="+48"
          pattern="[0-9]{9}"
          id={telephone}
        />

        <Input
          changed={handleChange}
          htmlFor={email}
          label={emailLabel}
          type="email"
          name={email}
          id={email}
        />

        {legal === 'Klient indywidualny' ? (
          <Input
            changed={handleChange}
            htmlFor={pesel}
            label={peselLabel}
            type="text"
            name={pesel}
            pattern="[0-9]{11}"
            id={pesel}
          />
        ) : (
          <Input
            changed={handleChange}
            htmlFor={nip}
            label={nipLabel}
            type="text"
            name={nip}
            pattern="^((\d{3}[- ]\d{3}[- ]\d{2}[- ]\d{2})|(\d{3}[- ]\d{2}[- ]\d{2}[- ]\d{3}))$"
            id={nip}
          />
        )}
        <hr />
        <div className="form__button-wrapper">
          <Button label="Anuluj" variant={cancelButtonVariant} />
          <Button label={buttonLabel} variant={saveButtonVariant} />
        </div>
      </form>
    </>
  );
};

export default Form;
