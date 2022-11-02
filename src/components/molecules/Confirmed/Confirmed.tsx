import { FormData } from 'components/molecules/Form/Form.data';
import { FormDataType } from './confirmed.models.d';

const Confirmed = ({
  name,
  province,
  company,
  street,
  city,
  email,
  streetNumber,
  nip,
  pesel,
  prefix,
  telephone,
  zipCode,
}: FormDataType) => {
  const {
    personName,
    companyName,
    adressLabel,
    cityLabel,
    emailLabel,
    nipLabel,
    peselLabel,
    provinceLabel,
    telephoneLabel,
  } = FormData;

  return (
    <div className="confirmed">
      {name.length > 1 ? (
        <p>
          {personName} {name}
        </p>
      ) : (
        <p>
          {companyName} {company}
        </p>
      )}
      <p>
        {adressLabel} {street} {streetNumber}
      </p>
      <p>
        {cityLabel} {city} {zipCode}
      </p>
      <p>
        {provinceLabel} {province}
      </p>
      <p>
        {telephoneLabel} {prefix}
        {telephone}
      </p>
      <p>
        {emailLabel} {email}
      </p>
      {pesel.length > 1 ? (
        <p>
          {peselLabel} {pesel}
        </p>
      ) : (
        <p>
          {nipLabel} {nip}
        </p>
      )}
    </div>
  );
};

export default Confirmed;
