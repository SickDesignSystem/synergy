import type { Meta } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  title: 'Templates/Forms',
};
export default meta;

export const Default = {
  render: () => html`
    <style>
    .synergy-form-demo {
      background: var(--syn-color-neutral-0);
      border: 1px dashed var(--syn-color-neutral-300);
      margin: 0 auto;
      padding: 10px 20px;
      width: 750px;
    }

    .synergy-form-demo h1 {
      font-size: var(--syn-font-size-3x-large);
      font-weight: normal;
      margin: 0 0 10px 0;
    }

    .synergy-form-demo > p {
      margin: 0 0 var(--syn-spacing-2x-large) 0;
    }

    .synergy-form-demo em {
      font-size: var(--syn-font-size-x-small);
      font-style: normal;
    }

    .synergy-form-demo fieldset {
      border: none;
      margin: 0 0 var(--syn-spacing-2x-large) 0;
      padding: 0;
    }

    .synergy-form-demo fieldset legend {
      font-size: var(--syn-font-size-large);
      margin-bottom: var(--syn-font-size-small);
    }

    .synergy-form-demo fieldset legend + p {
      font-size: var(--syn-font-size-medium);
      margin: 0 0 var(--syn-font-size-medium) 0;
    }

    .synergy-form-demo .fields {
      display: flex;
      flex-flow: wrap;
      margin-bottom: var(--syn-font-size-x-large);
      gap: var(--syn-spacing-large) var(--syn-font-size-small);
    }

    .synergy-form-demo .fields > * {
      flex-basis: calc(50% - var(--syn-spacing-medium));
    }

    syn-radio-group::part(form-control-input) {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: 1fr 1fr 1fr;
    }

    .submit-actions {
      display: flex;
      justify-content: right;
      margin-bottom: var(--syn-font-size-x-large);
    }
    </style>
    <div class="synergy-form-demo">
      <h1>Kontaktformular</h1>
      <p>Bitte geben Sie Ihre Kontaktdaten an und beschreiben Sie, wobei wir Sie unterstützen können.</p>

      <form method="post" id="syn-form-demo">
        
        <fieldset>
          <syn-radio-group
            label="Zu welchem Thema haben Sie Fragen?"
            name="topic"
            required
          >
            <syn-radio value="1">Anfrage/Angebot</syn-radio>
            <syn-radio value="2">Aufträge/Rechnungen</syn-radio>
            <syn-radio value="3">Rücksendungen/Reklamation</syn-radio>
            <syn-radio value="4">Zubehörauswahl</syn-radio>
            <syn-radio value="5">Applikationserklärung</syn-radio>
            <syn-radio value="6">Inbetriebnahmeunterstützung</syn-radio>
          </syn-radio-group>
        </fieldset>

        <fieldset>
          <legend>Beschreiben Sie Ihre Anfrage</legend>
          <p>Es ist sehr hilfreich, wenn die Beschreibung möglichst genau ist, so können wir noch spezieller auf Ihre Fragen eingehen. (Bei Applikationsbeschreibungen ggf. Material/Abmessungen/Geschwindigkeiten mit angeben).</p>

          <syn-textarea label="Ihre Nachricht" name="message" required></syn-textarea>
        </fieldset>

        <fieldset>
          <legend>Ihre Kontaktdaten:</legend>
          <div class="fields">
            <syn-input label="Kundennummer" name="customerNr"></syn-input>
            <syn-input label="Firmenname" name="companyName" required></syn-input>
            <syn-input label="Adresse" name="address" required></syn-input>
            <syn-input label="PLZ" name="zip" required></syn-input>
            <syn-input label="Ort" name="city" required></syn-input>
            <syn-input label="Land" name="country" required></syn-input>
            <syn-input label="Ansprechpartner" name="salesPerson" required></syn-input>
            <syn-input type="tel" label="Telefonnummer" name="phone"></syn-input>
            <syn-input type="tel" label="Fax" name="fax"></syn-input>
            <syn-input type="email" label="E-Mail-Adresse" name="mail" required></syn-input>
          </div>
          <syn-checkbox name="subscribeNewsletter">
            Ja, ich möchte regelmäßig aktuelle und interessanteInformationen zu Lösungen mit Produkten, Systemenund Services von SICK per E-Mail erhalten.
            Ich kanndie Einwilligung jederzeit widerrufen.
            Für einenWiderruf der Einwilligung kann ich jederzeit denAbmeldelink in jedem Newsletter/jeder E-Mail nutzen.
          </syn-checkbox>
        </fieldset>

        <div class="submit-actions">
          <syn-button type="submit" variant="filled">Absenden</syn-button>
        </div>

        <em>
          Mit einem * gekennzeichnete Felder sind Pflichtfelder.
          Ihre Daten werden vertraulich behandelt und selbstverständlich nicht an Dritte weitergegeben.
          Hier erfahren Sie mehr zu unserem Datenschutz
        </em>
      </form>
    </div>
  `,
};
