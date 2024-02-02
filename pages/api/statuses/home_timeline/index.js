/* eslint-disable import/no-anonymous-default-export */
const timeLine = [
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
  {
    avatar:
      'https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg',
    username: 'jsmith',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(timeLine));
};
