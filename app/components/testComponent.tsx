'use client';

import React, { useState } from 'react';
import { getSpecificScreenings } from '../lib/utils';

type Screening = {
  id: number;
  start_time: string;
};

const TestComponent = () => {
  const [specificScreenings, setSpecificScreenings] = useState<Screening[]>(
    getSpecificScreenings(1).data
  );

  return (
    <div>
      <h1>Enskilda visningar</h1>
      <ul>
        {specificScreenings.map((screening) => (
          <li key={screening.id}>{screening.start_time}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
