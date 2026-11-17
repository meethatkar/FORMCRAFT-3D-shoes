export const COLOR_REGIONS = [
  {
    id: 'mesh',
    name: 'Upper Body',
    shortName: 'Upper',
    description: 'Engineered breathable mesh and supportive side overlays',
    colors: [
      { name: 'White', hex: '#FFFFFF', border: '#D4D2CA' },
      { name: 'Black', hex: '#18181B', border: '#27272A' },
      { name: 'Red', hex: '#EF4444', border: '#DC2626' },
      { name: 'Blue', hex: '#2563EB', border: '#1D4ED8' },
      { name: 'Orange', hex: '#FF5A1F', border: '#EA580C' },
      { name: 'Green', hex: '#10B981', border: '#059669' },
    ]
  },
  {
    id: 'sole',
    name: 'Sole Unit',
    shortName: 'Sole',
    description: 'High-density sculpted foam midsole and rubber tread',
    colors: [
      { name: 'White', hex: '#FFFFFF', border: '#D4D2CA' },
      { name: 'Black', hex: '#18181B', border: '#27272A' },
      { name: 'Cream', hex: '#F5EBE1', border: '#E7D9CB' },
      { name: 'Grey', hex: '#64748B', border: '#475569' },
    ]
  },
  {
    id: 'laces',
    name: 'Laces & Eyelets',
    shortName: 'Laces',
    description: 'Reinforced woven micro-braid laces',
    colors: [
      { name: 'White', hex: '#FFFFFF', border: '#D4D2CA' },
      { name: 'Black', hex: '#18181B', border: '#27272A' },
      { name: 'Red', hex: '#EF4444', border: '#DC2626' },
      { name: 'Yellow', hex: '#F59E0B', border: '#D97706' },
    ]
  },
  {
    id: 'heel',
    name: 'Heel Counter',
    shortName: 'Heel',
    description: 'Molded stabilizer cup and rear collar pull',
    // In model, maps to 'patch' & 'band'
    colors: [
      { name: 'Black', hex: '#18181B', border: '#27272A' },
      { name: 'White', hex: '#FFFFFF', border: '#D4D2CA' },
      { name: 'Orange', hex: '#FF5A1F', border: '#EA580C' },
    ]
  },
  {
    id: 'stripes',
    name: 'Side Logo & Stripes',
    shortName: 'Side Logo',
    description: 'Signature graphic side stripes and precision TPU accents',
    colors: [
      { name: 'Orange', hex: '#FF5A1F', border: '#EA580C' },
      { name: 'White', hex: '#FFFFFF', border: '#D4D2CA' },
      { name: 'Black', hex: '#18181B', border: '#27272A' },
      { name: 'Blue', hex: '#2563EB', border: '#1D4ED8' },
      { name: 'Green', hex: '#10B981', border: '#059669' },
    ]
  }
];

export const INITIAL_CUSTOMIZATION = {
  mesh: '#FFFFFF',    // Upper
  sole: '#18181B',    // Sole
  laces: '#FFFFFF',   // Laces
  heel: '#FF5A1F',    // Heel (patch & band)
  stripes: '#FF5A1F', // Side Logo
  caps: '#18181B',    // Eyelet caps
  inner: '#18181B',   // Collar lining
};

export const PRESET_THEMES = [
  {
    id: 'craft-orange',
    name: 'Craft Orange (Default)',
    tag: 'Signature',
    colors: {
      mesh: '#FFFFFF',
      sole: '#18181B',
      laces: '#FFFFFF',
      heel: '#FF5A1F',
      stripes: '#FF5A1F',
      caps: '#18181B',
      inner: '#18181B'
    }
  },
  {
    id: 'noir-stealth',
    name: 'Stealth Triple Black',
    tag: 'Monochrome',
    colors: {
      mesh: '#18181B',
      sole: '#18181B',
      laces: '#18181B',
      heel: '#18181B',
      stripes: '#27272A',
      caps: '#18181B',
      inner: '#18181B'
    }
  },
  {
    id: 'aero-pure',
    name: 'Aero Pure White',
    tag: 'Minimalist',
    colors: {
      mesh: '#FFFFFF',
      sole: '#FFFFFF',
      laces: '#FFFFFF',
      heel: '#FFFFFF',
      stripes: '#64748B',
      caps: '#FFFFFF',
      inner: '#64748B'
    }
  },
  {
    id: 'heritage-runner',
    name: 'Heritage Heritage Red',
    tag: 'Athletic',
    colors: {
      mesh: '#FFFFFF',
      sole: '#F5EBE1',
      laces: '#EF4444',
      heel: '#EF4444',
      stripes: '#2563EB',
      caps: '#EF4444',
      inner: '#18181B'
    }
  },
  {
    id: 'cyber-kinetic',
    name: 'Cyber Kinetic',
    tag: 'Futuristic',
    colors: {
      mesh: '#2563EB',
      sole: '#18181B',
      laces: '#F59E0B',
      heel: '#FF5A1F',
      stripes: '#10B981',
      caps: '#FF5A1F',
      inner: '#18181B'
    }
  }
];

