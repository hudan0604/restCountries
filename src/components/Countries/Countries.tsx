import React, { FC } from 'react';
import './Countries.scss';

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => (
  <div className="Countries" data-testid="Countries">
    Countries Component
  </div>
);

export default Countries;
