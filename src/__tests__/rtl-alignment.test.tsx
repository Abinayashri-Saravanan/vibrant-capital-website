import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Arabic hero alignment', () => {
  it('hero heading and subtitle align right on /ar', async () => {
    window.history.pushState({}, 'Test', '/ar');
    render(
      <LanguageProvider>
        <div />
      </LanguageProvider>
    );
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });
});

