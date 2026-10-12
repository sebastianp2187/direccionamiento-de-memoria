---
name: x86 Architecture Reference System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#414751'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#7c572d'
  on-secondary: '#ffffff'
  secondary-container: '#fecb97'
  on-secondary-container: '#79542a'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#efbd8a'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#614018'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 24px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system is engineered for computer science and electrical engineering students, instructors, and systems programmers exploring low-level memory architectures. It balances the rigor and clarity of classic Intel Architecture Software Developer's Manuals with the interactive readability of modern platforms like MDN Web Docs and GitHub Docs.

The aesthetic blends **Technical Minimalism** with structured **Data Density**. The interface prioritizes clarity over ornamentation, making complex physical and logical address translation mechanics intuitive and scannable. It eliminates visual noise, treating registers, bitfields, bus traces, and segmented memory layouts with precision schematic styling. Micro-interactions are deterministic, snappy, and explanatory, evoking the operational confidence of an interactive hardware debugging console.

## Colors

The color system divides historical and architectural operational paradigms through explicit functional color-coding:

- **Primary Mode (Protected Mode Tech Blue):** `#4A90E2` anchors 32-bit protected mode concepts, selectors, and paging components. Its subtle tint `#E8F1FF` serves as the canvas foundation for protected mode execution contexts.
- **Secondary Mode (Real Mode Amber/Gold):** `#D4A574` highlights legacy 8086 segmentation, 1 MB constraints, and physical shift calculations (`Segment × 16 + Offset`). Its muted counterpart `#F4E4C1` defines real-mode memory blocks and alert badges.
- **Surface & Structural Neutrals:** Canvas `#F8FAFC` and elevated cards `#FFFFFF` frame content with precision boundary rules using `#E2E8F0`. Typography is anchored in `#0F172A` for headers and `#2C3E50` for technical descriptions.

### Segment Descriptor Field Accents
Bit-level field breakdowns and descriptor table entries follow a strict mapping:
- **Base Address:** `#E74C3C` (System Crimson)
- **Segment Limit:** `#3B82F6` (Electric Blue)
- **Attribute / Flags:** `#F39C12` (Descriptor Gold)
- **Access Rights / Type:** `#9B59B6` (Type Violet)
- **Table Indicators (GDT / LDT):** `#10B981` (System Green)

## Typography

The typography system pairs structural clarity with computational precision:

- **Headings & Body (`Inter`):** Inter provides high legibility at dense information scales. Heading styles enforce tight letter spacing and high contrast for immediate context parsing. Body text retains generous line height to prevent fatigue when reading multi-stage technical breakdowns.
- **Registers, Addresses, and Bit Offsets (`JetBrains Mono`):** All hexadecimal values (`0x0000` to `0xFFFF`), memory addresses, opcode fragments, arithmetic equations, and bit positions [31:0] strictly use JetBrains Mono. Tabular figures and fixed-width alignment guarantee that segmented memory cells line up across dynamic recalculations.

## Layout & Spacing

The architecture operates on an 8pt base unit grid within a dual-panel technical layout:

- **Desktop (1200px+):** A 12-column fluid structure. Interactive inputs, register controllers, and selector pickers anchor to a 4-column side pane, while visual memory maps, translation flow charts, and bitfield tables occupy the 8-column canvas.
- **Tablet (768px - 1199px):** Adapts to an 8-column layout. The controller condenses above the visualizer, prioritizing register state cards side-by-side with calculation traces.
- **Mobile (< 768px):** A single-column vertical flow. Complex 32-bit registers horizontally scroll smoothly within dedicated code cards with left/right fade cues.

Padding scale enforces consistent internal component spacing: `space-xs` (4px) for chip counters and bit indicators; `space-sm` (8px) for input padding and compact table cells; `space-md` (16px) for standard panel containers; `space-lg` (24px) for card interiors; and `space-xl` (40px) for macro section offsets.

## Elevation & Depth

Visual hierarchy uses low-contrast architectural borders supplemented by subtle ambient contact shadows:

- **Level 0 (Base Canvas):** Background surface `#F8FAFC`, flat, unshadowed.
- **Level 1 (Card & Module Shells):** Surface `#FFFFFF`, border `1px solid #E2E8F0`, shadow `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
- **Level 2 (Active Registers & Selected Blocks):** Interactive memory blocks and active pipeline stages elevate with border `1px solid #CBD5E1` and an ambient shadow `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Inspection Overlays & Tooltips):** Floating bit inspector drawers and descriptor breakdown popovers use surface `#FFFFFF`, border `1px solid #94A3B8`, and shadow `0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05)`.

Selected states swap standard neutral borders for their respective mode or field accent (e.g., `2px solid #4A90E2` for Protected Mode active registers, `2px solid #D4A574` for Real Mode base segments).

## Shapes

The design system employs **Soft (`1`)** corner treatments (0.25rem / 4px base radius) to reflect the structure of integrated circuit packages and technical data sheets. 

- Form controls, register pill-chips, and table cells utilize `0.25rem` (4px) corner radii.
- Container panels, interactive cards, and code-block editors utilize `0.5rem` (8px via `rounded-lg`).
- Modal sheets, inspector panels, and visual memory maps maintain `0.75rem` (12px via `rounded-xl`).
- Pill rounding is reserved exclusively for small status indicators (e.g., `PE` Protection Enable bit flags).

## Components

### Buttons
- **Primary Action (Protected Mode):** Background `#4A90E2`, text `#FFFFFF`, border none, font `label-md`. Hover: `#357ABD`. Focus: 2px ring `#4A90E2` with 2px offset.
- **Secondary Action (Real Mode):** Background `#D4A574`, text `#0F172A`, border none, font `label-md`. Hover: `#C3925F`.
- **Technical Ghost Button:** Background transparent, text `#2C3E50`, border `1px solid #E2E8F0`. Hover: background `#F1F5F9`.

### Chips & Bitfield Tags
- Monospaced identifiers (`G`, `D/B`, `L`, `AVL`, `P`, `DPL`).
- Padding `2px 6px`, font `label-sm`, rounded `2px`.
- Active state uses semantic field colors with 15% opacity fills and 100% solid borders (e.g., Access Rights tag: fill `rgba(155, 89, 182, 0.15)`, text `#9B59B6`, border `1px solid #9B59B6`).

### Input Fields (Hex & Offset Entries)
- Background `#FFFFFF`, border `1px solid #CBD5E1`, text font `code-md`, text color `#0F172A`.
- Left-adorned with static `0x` label in `#64748B`.
- Fixed character spacing with instant validation indicators for out-of-bound addresses (e.g., values exceeding `0x000FFFFF` in Real Mode).

### Bit-Level Segment Descriptor Visualizer
- A continuous 64-bit strip partitioned into distinct fields: Base [31:24], Flags [23:20], Limit [19:16], Access [15:8], Base [23:16], Limit [15:0], Base [15:0].
- Each block features an overhead label (`label-sm`), bit index indicators (`code-sm`), and a color-coded top border (2px) matching semantic tokens (Crimson, Blue, Gold, Purple).

### Cards & Pipeline Steps
- Background `#FFFFFF`, border `1px solid #E2E8F0`, padding `space-md` to `space-lg`.
- Step headers contain a numerical index badge (`w-6 h-6`, rounded `4px`, background `#F1F5F9`, text `#0F172A`, font `code-sm`).
- Formula callouts inside cards use `#F8FAFC` background panels with `1px dashed #CBD5E1` borders to contrast against static documentation copy.

### Checkboxes & Segment Switches
- Real vs. Protected mode selector implements a precision segmented tab controller: container `#F1F5F9`, border `1px solid #E2E8F0`, active thumb `#FFFFFF` with Level 1 shadow and mode accent indicator.