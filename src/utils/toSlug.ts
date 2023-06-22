import unidecode from 'unidecode';

export function toSlug(text: string) {
  const slug = text
    .toLowerCase() // converte a string para minúsculas
    .replace(/^# /, '') // remove o prefixo "# " caso exista
    .replace(/[^\wÀ-ÖØ-öø-ÿ ]+/g, '') // remove caracteres não alfanuméricos (exceto letras acentuadas e espaço em branco)
    .replace(/ /g, '-') // substitui espaços em branco por hífens
    .replace(/--+/g, '-'); // remove hífens duplicados

  return unidecode(slug); // remove os acentos dos caracteres
}
