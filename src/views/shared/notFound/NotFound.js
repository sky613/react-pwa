import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('12333');

    // history.replace('/result/notFound');
    navigate('/notFound', { replace: true });
  }, []);

  return (
    <Container>
      <ErrorMessage />
    </Container>
  );
}

const Container = styled.div`
`;

export default NotFound;
