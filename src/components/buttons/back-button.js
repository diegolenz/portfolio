import React from 'react'

import { useNavigate } from 'react-router-dom';
import {  Button } from 'react-bootstrap';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="warning" onClick={() => navigate(-1)}>Voltar</Button>

  );
}
