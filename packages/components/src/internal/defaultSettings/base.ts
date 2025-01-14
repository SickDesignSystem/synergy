/* eslint-disable @typescript-eslint/quotes, sort-keys, max-len, operator-linebreak, @typescript-eslint/indent, no-underscore-dangle */
// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED file for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------

// Type imports
import type SynAccordion from "../../components/accordion/accordion.js";
import type SynAlert from "../../components/alert/alert.js";
import type SynBadge from "../../components/badge/badge.js";
import type SynButton from "../../components/button/button.js";
import type SynCheckbox from "../../components/checkbox/checkbox.js";
import type SynCombobox from "../../components/combobox/combobox.js";
import type SynDetails from "../../components/details/details.js";
import type SynFile from "../../components/file/file.js";
import type SynIconButton from "../../components/icon-button/icon-button.js";
import type SynInput from "../../components/input/input.js";
import type SynRadioButton from "../../components/radio-button/radio-button.js";
import type SynRadioGroup from "../../components/radio-group/radio-group.js";
import type SynRadio from "../../components/radio/radio.js";
import type SynRange from "../../components/range/range.js";
import type SynSelect from "../../components/select/select.js";
import type SynSwitch from "../../components/switch/switch.js";
import type SynTag from "../../components/tag/tag.js";
import type SynTextarea from "../../components/textarea/textarea.js";
import type SynValidate from "../../components/validate/validate.js";
import type SynergyElement from "../synergy-element.js";
import type { SynDefaultChangedAttribute } from "../../events/events.js";

// Core types

/**
 * Custom helper type that adds decorated properties from
 * the globalSettings helper.
 */
export type GlobalSettingsEnabledElement = SynergyElement & {
  __originalDecoratedClassName: string;
  overrideGlobalSettings: (
    changedProperties: SynDefaultChangedAttribute[],
  ) => void;
};

/**
 * Allows for partial recursive types
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

/**
 * Allowed value for a default setting
 * Gets the value of a given attribute for a given component
 */
export type AllowedValueForDefaultSetting<
  Elm extends SynergyElement,
  Attr extends keyof Elm,
> = Elm[Attr];

/**
 * List of all components that have default values
 */
export type ComponentNamesWithDefaultValues =
  | "SynAccordion"
  | "SynAlert"
  | "SynBadge"
  | "SynButton"
  | "SynCheckbox"
  | "SynCombobox"
  | "SynDetails"
  | "SynFile"
  | "SynIconButton"
  | "SynInput"
  | "SynRadio"
  | "SynRadioButton"
  | "SynRadioGroup"
  | "SynRange"
  | "SynSelect"
  | "SynSwitch"
  | "SynTag"
  | "SynTextarea"
  | "SynValidate";

/**
 * Extracts all available default settings for a given component
 */
export type ExtractSettingsForElement<C extends SynergyElement> = {
  [key in keyof SynDefaultSettings]?: key extends keyof C
    ? AllowedValueForDefaultSetting<C, key>
    : never;
};

/**
 * Default settings map for all component values that have defaults set
 */
export type SynDefaultSettings = {
  size: {
    SynAccordion?: AllowedValueForDefaultSetting<SynAccordion, "size">;
    SynButton?: AllowedValueForDefaultSetting<SynButton, "size">;
    SynCheckbox?: AllowedValueForDefaultSetting<SynCheckbox, "size">;
    SynCombobox?: AllowedValueForDefaultSetting<SynCombobox, "size">;
    SynDetails?: AllowedValueForDefaultSetting<SynDetails, "size">;
    SynFile?: AllowedValueForDefaultSetting<SynFile, "size">;
    SynIconButton?: AllowedValueForDefaultSetting<SynIconButton, "size">;
    SynInput?: AllowedValueForDefaultSetting<SynInput, "size">;
    SynRadio?: AllowedValueForDefaultSetting<SynRadio, "size">;
    SynRadioButton?: AllowedValueForDefaultSetting<SynRadioButton, "size">;
    SynRadioGroup?: AllowedValueForDefaultSetting<SynRadioGroup, "size">;
    SynRange?: AllowedValueForDefaultSetting<SynRange, "size">;
    SynSelect?: AllowedValueForDefaultSetting<SynSelect, "size">;
    SynSwitch?: AllowedValueForDefaultSetting<SynSwitch, "size">;
    SynTag?: AllowedValueForDefaultSetting<SynTag, "size">;
    SynTextarea?: AllowedValueForDefaultSetting<SynTextarea, "size">;
  };
  variant: {
    SynAlert?: AllowedValueForDefaultSetting<SynAlert, "variant">;
    SynBadge?: AllowedValueForDefaultSetting<SynBadge, "variant">;
    SynButton?: AllowedValueForDefaultSetting<SynButton, "variant">;
    SynValidate?: AllowedValueForDefaultSetting<SynValidate, "variant">;
  };
};

// Exports

/**
 * Default settings for all components
 */
export const defaultSettings: SynDefaultSettings = {
  size: {
    SynAccordion: "medium",
    SynButton: "medium",
    SynCheckbox: "medium",
    SynCombobox: "medium",
    SynDetails: "medium",
    SynFile: "medium",
    SynIconButton: "inherit",
    SynInput: "medium",
    SynRadio: "medium",
    SynRadioButton: "medium",
    SynRadioGroup: "medium",
    SynRange: "medium",
    SynSelect: "medium",
    SynSwitch: "medium",
    SynTag: "medium",
    SynTextarea: "medium",
  },
  variant: {
    SynAlert: "primary",
    SynBadge: "primary",
    SynButton: "outline",
    SynValidate: "native",
  },
};

/**
 * Initial default settings for all components
 */
export const INITIAL_DEFAULT_SETTINGS: SynDefaultSettings = {
  size: {
    SynAccordion: "medium",
    SynButton: "medium",
    SynCheckbox: "medium",
    SynCombobox: "medium",
    SynDetails: "medium",
    SynFile: "medium",
    SynIconButton: "inherit",
    SynInput: "medium",
    SynRadio: "medium",
    SynRadioButton: "medium",
    SynRadioGroup: "medium",
    SynRange: "medium",
    SynSelect: "medium",
    SynSwitch: "medium",
    SynTag: "medium",
    SynTextarea: "medium",
  },
  variant: {
    SynAlert: "primary",
    SynBadge: "primary",
    SynButton: "outline",
    SynValidate: "native",
  },
};
