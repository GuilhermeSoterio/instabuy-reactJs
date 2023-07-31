import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
mock.onGet('/api/data').reply(200, { data: 'mocked data' });

// Função personalizada para renderizar componentes com configurações adicionais
global.customRender = (ui, options) => {
  // Configurações globais de renderização, se necessário
  const customOptions = {
    // Exemplo: adicionar um provedor de contexto globalmente
  };

  return render(ui, customOptions);
};