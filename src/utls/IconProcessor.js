export const iconProcessor = (allIcons) => {
  const solidIcons = allIcons.solid ?? [];
  const regularIcons = allIcons.regular ?? [];
  const lightIcons = allIcons.light ?? [];
  const thinIcons = allIcons.thin ?? [];
  const duotoneIcons = allIcons.duotone ?? [];
  const brandIcons = allIcons.brands ?? [];
  return [
    ...solidIcons,
    ...regularIcons,
    ...lightIcons,
    ...thinIcons,
    ...duotoneIcons,
    ...brandIcons,
  ];
};
