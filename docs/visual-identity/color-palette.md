# Color Palette

At this page you can find Pepperi's brand colors, system colors uses for general purpose, acceptable variations, and their intended uses.

We are using **design tokens** which is a standardized variable used to define and manage color values consistently across our design system. Tokens ensure uniformity and ease of updates, allowing colors to be applied and adjusted universally. For example, instead of using a hex code like `#83B30C` for our Primary brand color, we'll use the `color-primary-brand` token. This abstraction helps maintain a cohesive visual identity and simplifies changes across different platforms and components.

---

## Brand colors

At Pepperi, we use **three** brand colors, each named to reflect its significance. 

Each color has two variants:

- The *brand* variant is used for color fills.
- The *contrast* variant is used for text color or as a background for white text.

### Primary

This is Pepperi’s primary brand color, representing our core identity and used extensively throughout our branding and user interface. It sets the tone for our visual communication, ensuring consistency and recognition. This color is pivotal in establishing our brand presence and is applied to key elements such as logos, buttons, and prominent design features.

- `color-primary-brand` – `hsl(79, 68%, 32%)` | `#83B30C`
- `color-primary-contrast` – `hsl(79, 68%, 23%)` | `#5D8009` 

<ColorTwo />

### Secondary

This is Pepperi’s secondary brand color, used to add emphasis and highlight important elements. It complements the primary color and is applied to call-to-action buttons, highlights, and other accents to enhance visual engagement.

- `color-secondary-brand` – `hsl(17, 100%, 50%)` | `#FE5000`
- `color-secondary-contrast` – `hsl(17, 100%, 40%)` | `#D14100`

<ColorTwo 
    color-one="var(--color-secondary-brand)" 
    color-two="var(--color-secondary-contrast)" 
/>

### Tertiary

This is Pepperi’s tertiary brand color, used to support and enrich our color palette. It adds depth and flexibility, typically applied to secondary accents, background elements, and subtle details to create a balanced visual experience.

- `color-tertiary-brand` – `hsl(38, 100%, 50%)` | `#FF9800`
- `color-tertiary-contrast` – `hsl(38, 100%, 30%)` | `#AB6600`
<ColorTwo 
    color-one="var(--color-tertiary-brand)" 
    color-two="var(--color-tertiary-contrast)" 
/>

---

## System colors

General purpose colors to build UI and other graphic elements. General-purpose colors designed to build UI and other graphic elements, ensuring a cohesive and visually appealing interface.


### Text colors

These colors are specifically used for text, providing semantic emphasis and functional differentiation.

- Semantic Emphasis: Colors like caution or success.
- Functionality: Colors indicating links or disabled states.

#### Main text color

Used for the majority of text content, ensuring readability and consistency.

- `color-system-main`: `hsl(0, 0%, 10%)` | `#1a1a1a`
- `color-system-dimmed`: as `color-system-main` at 75% opacity
- `color-system-disabled`: as `color-system-main` at 35% opacity
- `color-system-muted`: as `color-system-main` at 10% opacity

<ColorFour />

#### Link font color

Designated for hyperlinks, ensuring they stand out and are easily identifiable. Also used as focus state color.

- `color-link-main`: `hsl(0, 0%, 10%)` | `#1a1a1a`
- `color-link-dimmed`: as `color-link-main` at 75% opacity
- `color-link-disabled`: as `color-link-main` at 35% opacity
- `color-link-muted`: as `color-link-main` at 10% opacity

<ColorFour 
    color-one="var(--color-link-main)" 
    color-two="var(--color-link-dimmed)" 
    color-three="var(--color-link-disabled)" 
    color-four="var(--color-link-muted)" 
/>

#### Success color

Used to indicate success states, such as confirmations and positive notifications.

- `color-success-main`: `hsl(120, 100%, 20%)` | `#006600`
- `color-success-dimmed`: as `color-success-main` at 75% opacity
- `color-success-disabled`: as `color-success-main` at 35% opacity
- `color-success-muted`: as `color-success-main` at 10% opacity
  
<ColorFour 
    color-one="var(--color-success-main)" 
    color-two="var(--color-success-dimmed)" 
    color-three="var(--color-success-disabled)" 
    color-four="var(--color-success-muted)" 
/>

#### Caution color

Used to indicate caution or error states, such as warnings and alerts.

- `color-caution-main`: `hsl(0, 100%, 45%)` | `#e60000`
- `color-caution-dimmed`: as `color-caution-main` at 75% opacity
- `color-caution-disabled`: as `color-caution-main` at 35% opacity
- `color-caution-muted`: as `color-caution-main` at 10% opacity

<ColorFour 
    color-one="var(--color-caution-main)" 
    color-two="var(--color-caution-dimmed)" 
    color-three="var(--color-caution-disabled)" 
    color-four="var(--color-caution-muted)" 
/>

### Gray Palette

A range of gray shades used to create depth, contrast, and structure within the UI.

- `color-mono-0-white`: `hsl(0, 0%, 100%)` | `#ffffff`
- `color-mono-1-bright`: `hsl(0, 0%, 97%)` | `#f7f7f7`
- `color-mono-2-lighter`: `hsl(0, 0%, 94%)` | `#eeeeee`
- `color-mono-3-light`: `hsl(0, 0%, 80%)` | `#cccccc`
- `color-mono-4-base`: `hsl(0, 0%, 60%)` | `#999999`
- `color-mono-5-shade`: `hsl(0, 0%, 35%)` | `#595959`
- `color-mono-6-dark`: `hsl(0, 0%, 20%)` | `#333333`
- `color-mono-7-darkest`: `hsl(0, 0%, 10%)` | `#1a1a1a`
- `color-mono-8-black`: `hsl(0, 0%, 10%);` | `#000000`

## CSS & JSON files

Get all color tokens in our design system in both HSL and hex as a JSON file or CSS file.

<DownloadFile 
    file-link="/downloads/design-tokens-hsl.json"
    fileDesc="Download color tokens HSL JSON file"
/>
<DownloadFile 
    file-link="/downloads/design-tokens-hex.json"
    fileDesc="Download color tokens HEX JSON file"
/>
<DownloadFile 
    file-link="/downloads/design-tokens.css"
    fileDesc="Download color tokens CSS file"
/>

```json
{
    "color-primary-brand": [
        "hsl(79, 68%, 32%)",
        "#83B30C"
    ],
    "color-primary-contrast": [
        "hsl(79, 68%, 23%)",
        "#5D8009"
    ],
    "color-secondary-brand": [
        "hsl(17, 100%, 50%)",
        "#FE5000"
    ],
    "color-secondary-contrast": [
        "hsl(17, 100%, 40%)",
        "#D14100"
    ],
    "color-tertiary-brand": [
        "hsl(38, 100%, 50%)",
        "#FF9800"
    ],
    "color-tertiary-contrast": [
        "hsl(38, 100%, 30%)",
        "#AB6600"
    ],
    "color-system-main": [
        "hsla(0, 0%, 10%, 1)",
        "#1a1a1aFF"
    ],
    "color-system-dimmed": [
        "hsla(0, 0%, 10%, 0.75)",
        "#1a1a1aBF"
    ],
    "color-system-disabled": [
        "hsla(0, 0%, 10%, 0.35)",
        "#1a1a1a59"
    ],
    "color-system-muted": [
        "hsla(0, 0%, 10%, 0.10)",
        "#1a1a1a1A"
    ],
    "color-link-main": [
        "hsla(0, 0%, 10%, 1)",
        "#1a1a1aFF"
    ],
    "color-link-dimmed": [
        "hsla(0, 0%, 10%, 0.75)",
        "#1a1a1aBF"
    ],
    "color-link-disabled": [
        "hsla(0, 0%, 10%, 0.35)",
        "#1a1a1a59"
    ],
    "color-link-muted": [
        "hsla(0, 0%, 10%, 0.10)",
        "#1a1a1a1A"
    ],
    "color-success-main": [
        "hsla(120, 100%, 20%, 1)",
        "#006600FF"
    ],
    "color-success-dimmed": [
        "hsla(120, 100%, 20%, 0.75)",
        "#006600BF"
    ],
    "color-success-disabled": [
        "hsla(120, 100%, 20%, 0.35)",
        "#00660059"
    ],
    "color-success-muted": [
        "hsla(120, 100%, 20%, 0.10)",
        "#0066001A"
    ],
    "color-caution-main": [
        "hsla(0, 100%, 45%, 1)",
        "#e60000FF"
    ],
    "color-caution-dimmed": [
        "hsla(0, 100%, 45%, 0.75)",
        "#e60000BF"
    ],
    "color-caution-disabled": [
        "hsla(0, 100%, 45%, 0.35)",
        "#e6000059"
    ],
    "color-caution-muted": [
        "hsla(0, 100%, 45%, 0.10)",
        "#e600001A"
    ],
    "color-mono-0-white": [
        "hsl(0, 0%, 100%)",
        "#ffffff"
    ],
    "color-mono-1-bright": [
        "hsl(0, 0%, 97%)",
        "#f7f7f7"
    ],
    "color-mono-2-lighter": [
        "hsl(0, 0%, 94%)",
        "#eeeeee"
    ],
    "color-mono-3-light": [
        "hsl(0, 0%, 80%)",
        "#cccccc"
    ],
    "color-mono-4-base": [
        "hsl(0, 0%, 60%)",
        "#999999"
    ],
    "color-mono-5-shade": [
        "hsl(0, 0%, 35%)",
        "#595959"
    ],
    "color-mono-6-dark": [
        "hsl(0, 0%, 20%)",
        "#333333"
    ],
    "color-mono-7-darkest": [
        "hsl(0, 0%, 10%)",
        "#1a1a1a"
    ],
    "color-mono-8-black": [
        "hsl(0, 0%, 10%)",
        "#000000"
    ]
}
```