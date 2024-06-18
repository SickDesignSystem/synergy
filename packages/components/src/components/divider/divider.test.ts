/**
 * ---------------------------------------------------------------------
 * 🔒 AUTOGENERATED BY VENDORISM
 * Removing this comment will prevent it from being managed by it.
 * ---------------------------------------------------------------------
 */

/* eslint-disable */
import '../../../dist/synergy.js';
import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type SynDivider from './divider.js';

describe('<syn-divider>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<SynDivider>(html` <syn-divider></syn-divider> `);
      await expect(el).to.be.accessible();
    });

    it('default properties', async () => {
      const el = await fixture<SynDivider>(html` <syn-divider></syn-divider> `);

      expect(el.vertical).to.be.false;
      expect(el.getAttribute('role')).to.equal('separator');
      expect(el.getAttribute('aria-orientation')).to.equal('horizontal');
    });
  });

  describe('vertical property change ', () => {
    it('aria-orientation is updated', async () => {
      const el = await fixture<SynDivider>(html` <syn-divider></syn-divider> `);

      el.vertical = true;
      await elementUpdated(el);

      expect(el.getAttribute('aria-orientation')).to.equal('vertical');
    });
  });
});
