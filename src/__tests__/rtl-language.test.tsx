import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Arabic routes set html dir/lang', () => {
  it('sets dir="rtl" and lang="ar" on /ar', async () => {
    window.history.pushState({}, 'Test', '/ar');
    render(
      <LanguageProvider>
        <div />
      </LanguageProvider>
    );
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    expect(document.documentElement.getAttribute('lang')).toBe('ar');
  });
});

