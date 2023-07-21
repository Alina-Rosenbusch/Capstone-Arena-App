const trainingData = [
  {
    id: 1,
    bookedArena: "Dressage Arena",
    bookedPerson: "Ally",
    time: "13:00-14:00",
    date: "20.July.2023",
    singleRider: false,
    title: "Training",
  },
  {
    id: 2,
    bookedArena: "Dressage Arena",
    bookedPerson: "Jelena",
    time: "15:00-16:00",
    date: "20.July.2023",
    singleRider: true,
    title: "Lesson with Angelo",
  },
  {
    id: 3,
    bookedArena: "Jumping Arena",
    bookedPerson: "Flo",
    time: "17:00-18:00",
    date: "21.July.2023",
    singleRider: false,
    title: "Training",
  },
  {
    id: 4,
    bookedArena: "Round Pen",
    bookedPerson: "James",
    time: "12:00-13:30",
    date: "22.July.2023",
    singleRider: true,
    title: "Parelli Session Level 2 Training",
  },
];

const arenaList = [
  {
    arena: "Dressage Arena",
    arena: "Dressage Arena outside",
    arena: "Jumping Arena",
    arena: "Military Arena",
    arena: "Round Pen",
  },
];

export default trainingData;
export { arenaList };
