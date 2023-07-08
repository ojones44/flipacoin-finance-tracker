function Avatar({
  top,
  accessory,
  hairColor,
  facialHair,
  facialHairColor,
  clothes,
  fabricColor,
  eyes,
  eyebrows,
  mouth,
  skin,
}) {
  return (
    <img
      src={`https://avataaars.io/?avatarStyle=Transparent&topType=${top}&accessoriesType=${accessory}&hairColor=${hairColor}&facialHairType=${facialHair}&facialHairColor=${facialHairColor}&clotheType=${clothes}&clotheColor=${fabricColor}&eyeType=${eyes}&eyebrowType=${eyebrows}&mouthType=${mouth}&skinColor=${skin}`}
      alt='avatar'
    />
  );
}
export default Avatar;
