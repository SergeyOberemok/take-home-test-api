export function highlight(value: string, text: string) {
  if (text?.length > 0) {
    return value.replace(
      new RegExp(`(.*)(${text})(.*)`, 'gi'),
      '$1<mark>$2</mark>$3'
    );
  }

  return value;
}
