
export function removeAccentsAndSpecialCharsAndFormatSpaces(str: string) {
    const slug = str.replace(/\s+/g, "-");
    return slug;
  }