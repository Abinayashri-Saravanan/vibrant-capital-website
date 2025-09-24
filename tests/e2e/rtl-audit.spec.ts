import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const ROUTES = [
  'https://vibrant-capital-website.lovable.app/ar',
  'https://vibrant-capital-website.lovable.app/ar/about',
  'https://vibrant-capital-website.lovable.app/ar/sectors',
  'https://vibrant-capital-website.lovable.app/ar/investments',
  'https://vibrant-capital-website.lovable.app/ar/for-investors',
];

const OUT_DIR = path.resolve(process.cwd(), 'test-results');
const OUT_FILE = path.join(OUT_DIR, 'rtl-audit.md');

test('RTL audit: list center-aligned elements on live Arabic routes', async ({ page }) => {
  const findings: { route: string; items: { selector: string; text: string }[] }[] = [];

  for (const url of ROUTES) {
    await page.goto(url, { waitUntil: 'load' });
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

    const items = await page.evaluate(() => {
      const results: { selector: string; text: string }[] = [];

      function isVisible(el: Element): boolean {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity || '1') > 0;
      }

      function selectorFor(el: Element): string {
        const parts: string[] = [];
        let cur: Element | null = el;
        while (cur && parts.length < 5) {
          let s = cur.nodeName.toLowerCase();
          if ((cur as Element).id) { s += `#${(cur as Element).id}`; parts.unshift(s); break; }
          const cls = (cur as Element).className;
          if (typeof cls === 'string' && cls.trim()) { s += '.' + cls.trim().split(/\s+/).slice(0,3).join('.'); }
          const p = cur.parentElement;
          if (p) {
            const sibs = Array.from(p.children).filter(c => c.nodeName === cur!.nodeName);
            const idx = sibs.indexOf(cur);
            s += `:nth-of-type(${idx+1})`;
          }
          parts.unshift(s);
          cur = p;
        }
        return parts.join(' > ');
      }

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let n: Node | null;
      while ((n = walker.nextNode())) {
        const el = n as HTMLElement;
        if (!isVisible(el)) continue;
        const txt = (el.innerText || '').trim();
        if (!txt) continue;
        const align = getComputedStyle(el).textAlign;
        if (align === 'center') {
          results.push({ selector: selectorFor(el), text: txt.slice(0, 120).replace(/\n/g, ' ') });
        }
      }
      return results;
    });

    findings.push({ route: url, items });
  }

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  let md = `# RTL Audit (center-aligned on Arabic routes)\n\n`;
  for (const f of findings) {
    md += `## ${f.route}\n\n`;
    if (!f.items.length) { md += `- None found\n\n`; continue; }
    f.items.forEach((it, i) => {
      md += `- ${i+1}. \`${it.selector}\`\n   - ${it.text}\n`;
    });
    md += `\n`;
  }
  fs.writeFileSync(OUT_FILE, md, 'utf-8');
  console.log(`RTL audit written to ${OUT_FILE}`);
});

