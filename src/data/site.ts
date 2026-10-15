// Datos de contacto: reemplazar por los reales antes de publicar el sitio definitivo.
export const contact = {
  whatsapp: '5493410000000',
  whatsappLabel: '+54 9 341 000-0000',
  email: 'hola@fernandagalantini.com.ar',
  instagram: 'https://www.instagram.com/',
  instagramLabel: '@fernandagalantini.arq',
  city: 'Rosario, Santa Fe',
};

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#llave-en-mano', label: 'Llave en mano' },
  { href: '#proceso', label: 'Cómo trabajo' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#mitos', label: 'Mitos de obra' },
];

export const waLink = (text = 'Hola Fernanda, quiero hacerte una consulta por un proyecto.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
