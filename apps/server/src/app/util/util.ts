export const getNotFoundMessage = (id: string, itemType: string): string => {
  return `Couldn't find ${itemType} with id '${id}'`;
};
